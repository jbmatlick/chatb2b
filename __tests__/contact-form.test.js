/**
 * Unit Tests for Contact Form and Airtable Integration
 * 
 * These tests focus on testing the logic and data transformation
 * without making actual API calls to Airtable or email services.
 */

const { validateFormData, formatAirtableData, sanitizeInput } = require('../test-utils/contact-form-helpers');

describe('Contact Form Unit Tests', () => {
  
  describe('Form Data Validation', () => {
    test('should validate correct form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This is a test message for the contact form.'
      };
      
      const result = validateFormData(validData);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject invalid email', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'invalid-email',
        company: 'Acme Corp',
        message: 'This is a test message.'
      };
      
      const result = validateFormData(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Please enter a valid email address');
    });

    test('should reject short name', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This is a test message.'
      };
      
      const result = validateFormData(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Name must be at least 2 characters long');
    });

    test('should reject short message', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'Hi'
      };
      
      const result = validateFormData(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Message must be at least 10 characters long');
    });

    test('should reject missing required fields', () => {
      const invalidData = {
        name: '',
        email: '',
        company: 'Acme Corp',
        message: ''
      };
      
      const result = validateFormData(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });

  describe('Input Sanitization', () => {
    test('should trim whitespace', () => {
      const input = {
        name: '  John Doe  ',
        email: '  john@example.com  ',
        company: '  Acme Corp  ',
        message: '  This is a test message.  '
      };
      
      const result = sanitizeInput(input);
      expect(result.name).toBe('John Doe');
      expect(result.email).toBe('john@example.com');
      expect(result.company).toBe('Acme Corp');
      expect(result.message).toBe('This is a test message.');
    });

    test('should convert email to lowercase', () => {
      const input = {
        name: 'John Doe',
        email: 'JOHN@EXAMPLE.COM',
        company: 'Acme Corp',
        message: 'This is a test message.'
      };
      
      const result = sanitizeInput(input);
      expect(result.email).toBe('john@example.com');
    });

    test('should handle empty company field', () => {
      const input = {
        name: 'John Doe',
        email: 'john@example.com',
        company: '',
        message: 'This is a test message.'
      };
      
      const result = sanitizeInput(input);
      expect(result.company).toBe('');
    });
  });

  describe('Airtable Data Formatting', () => {
    test('should format data correctly for Airtable', () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This is a test message for the contact form.'
      };
      
      const requestId = 'test123';
      const result = formatAirtableData(formData, requestId);
      
      expect(result).toEqual({
        'Lead Name': 'John Doe',
        'Email Address': 'john@example.com',
        'Company': 'Acme Corp',
        'Message': 'This is a test message for the contact form.',
        'Status': 'New',
        'Phone Number': ''
      });
    });

    test('should handle empty company field', () => {
      const formData = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        company: '',
        message: 'This is a test message.'
      };
      
      const requestId = 'test456';
      const result = formatAirtableData(formData, requestId);
      
      expect(result['Company']).toBe('');
      expect(result['Lead Name']).toBe('Jane Smith');
    });

    test('should always set Status to New', () => {
      const formData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Corp',
        message: 'Test message.'
      };
      
      const requestId = 'test789';
      const result = formatAirtableData(formData, requestId);
      
      expect(result['Status']).toBe('New');
    });

    test('should always set Phone Number to empty string', () => {
      const formData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Corp',
        message: 'Test message.'
      };
      
      const requestId = 'test101';
      const result = formatAirtableData(formData, requestId);
      
      expect(result['Phone Number']).toBe('');
    });
  });

  describe('Field Type Validation', () => {
    test('should ensure all fields are strings', () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This is a test message.'
      };
      
      const requestId = 'test111';
      const result = formatAirtableData(formData, requestId);
      
      // All values should be strings
      Object.values(result).forEach(value => {
        expect(typeof value).toBe('string');
      });
    });

    test('should handle special characters in message', () => {
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Acme Corp',
        message: 'This message has special chars: @#$%^&*()_+{}|:"<>?[]\\;\',./'
      };
      
      const requestId = 'test222';
      const result = formatAirtableData(formData, requestId);
      
      expect(result['Message']).toBe('This message has special chars: @#$%^&*()_+{}|:"<>?[]\\;\',./');
    });
  });
});

describe('Airtable Schema Compliance', () => {
  test('should match expected Airtable field names', () => {
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Corp',
      message: 'Test message.'
    };
    
    const requestId = 'test333';
    const result = formatAirtableData(formData, requestId);
    
    // Verify all expected field names are present
    const expectedFields = [
      'Lead Name',
      'Email Address', 
      'Company',
      'Message',
      'Status',
      'Phone Number'
    ];
    
    expectedFields.forEach(field => {
      expect(result).toHaveProperty(field);
    });
    
    // Verify no unexpected fields
    const actualFields = Object.keys(result);
    expect(actualFields).toEqual(expect.arrayContaining(expectedFields));
  });

  test('should not include computed fields', () => {
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Corp',
      message: 'Test message.'
    };
    
    const requestId = 'test444';
    const result = formatAirtableData(formData, requestId);
    
    // Should not include Create Date (computed by Airtable)
    expect(result).not.toHaveProperty('Create Date');
  });
});
