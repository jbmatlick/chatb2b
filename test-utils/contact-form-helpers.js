/**
 * Helper functions for contact form testing
 * These extract the core logic from api/send-email.js for unit testing
 */

/**
 * Validate form data according to the same rules used in the API
 */
function validateFormData(formData) {
  const errors = [];
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  // Email validation
  if (!formData.email || formData.email.trim().length === 0) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.push('Please enter a valid email address');
    }
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

/**
 * Sanitize input data according to the same rules used in the API
 */
function sanitizeInput(formData) {
  return {
    name: formData.name.trim(),
    company: formData.company?.trim() || '',
    email: formData.email.trim().toLowerCase(),
    message: formData.message.trim()
  };
}

/**
 * Format data for Airtable according to the same rules used in the API
 */
function formatAirtableData(formData, requestId) {
  return {
    'Lead Name': formData.name,
    'Email Address': formData.email,
    'Company': formData.company || '',
    'Message': formData.message,
    'Status': 'New',
    'Phone Number': '' // Empty since we don't collect phone in the form
    // Note: 'Create Date' is computed automatically by Airtable
  };
}

/**
 * Generate a test request ID
 */
function generateRequestId() {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Create test form data
 */
function createTestFormData(overrides = {}) {
  return {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test message for unit testing.',
    ...overrides
  };
}

module.exports = {
  validateFormData,
  sanitizeInput,
  formatAirtableData,
  generateRequestId,
  createTestFormData
};
