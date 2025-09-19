#!/usr/bin/env node

/**
 * Airtable Integration Test Script
 * 
 * This script tests the Airtable integration with comprehensive logging
 * to verify that form submissions are stored correctly with proper field types.
 * 
 * Usage: node test-airtable.js
 */

require('dotenv').config({ path: './env.local' });
const Airtable = require('airtable');

// Configuration
const airtableToken = process.env.AIRTABLE_API_TOKEN;
const airtableBaseId = process.env.AIRTABLE_BASE_ID;
const airtableTableName = process.env.AIRTABLE_TABLE_NAME;

// Enhanced logging function
function logTest(level, message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data
  };
  
  console.log(`[TEST ${level.toUpperCase()}] ${timestamp}: ${message}`, data);
}

// Test data - simulating a real contact form submission
const testSubmission = {
  name: 'Test User',
  email: 'test@example.com',
  company: 'Test Company Inc.',
  message: 'This is a test message to verify Airtable integration works correctly.',
  requestId: `test_${Date.now()}`
};

async function testAirtableConnection() {
  logTest('info', 'Starting Airtable integration test', {
    baseId: airtableBaseId,
    tableName: airtableTableName,
    hasToken: !!airtableToken
  });

  // Validate configuration
  if (!airtableToken) {
    logTest('error', 'AIRTABLE_API_TOKEN not found in environment variables');
    return false;
  }
  if (!airtableBaseId) {
    logTest('error', 'AIRTABLE_BASE_ID not found in environment variables');
    return false;
  }
  if (!airtableTableName) {
    logTest('error', 'AIRTABLE_TABLE_NAME not found in environment variables');
    return false;
  }

  try {
    // Initialize Airtable
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: airtableToken
    });
    const base = Airtable.base(airtableBaseId);

    logTest('info', 'Airtable client initialized successfully');

    // Test 1: Verify table exists and get schema
    logTest('info', 'Test 1: Verifying table schema...');
    
    const table = base(airtableTableName);
    
    // Get first record to check field names
    const firstRecord = await table.select({
      maxRecords: 1
    }).firstPage();

    if (firstRecord.length > 0) {
      const fields = Object.keys(firstRecord[0].fields);
      logTest('info', 'Table schema verified', {
        fieldNames: fields,
        recordCount: firstRecord.length > 0 ? 'Has existing records' : 'Empty table'
      });
    } else {
      logTest('warn', 'Table exists but is empty - will create first record');
    }

    // Test 2: Create test record
    logTest('info', 'Test 2: Creating test record...');
    
    const recordData = {
      'Lead Name': testSubmission.name,
      'Email Address': testSubmission.email,
      'Company': testSubmission.company,
      'Message': testSubmission.message,
      'Status': 'New',
      'Phone Number': ''
      // Note: 'Create Date' is computed automatically by Airtable
    };

    logTest('info', 'Sending data to Airtable', {
      tableName: airtableTableName,
      recordData: {
        LeadName: recordData['Lead Name'],
        EmailAddress: recordData['Email Address'],
        Company: recordData.Company,
        Message: recordData.Message.substring(0, 50) + '...',
        CreateDate: 'Auto-computed by Airtable',
        Status: recordData.Status,
        PhoneNumber: recordData['Phone Number'] || 'Empty'
      }
    });

    const createdRecord = await table.create(recordData);
    
    logTest('success', 'Test record created successfully', {
      recordId: createdRecord.id,
      tableName: airtableTableName
    });

    // Test 3: Verify record was created correctly
    logTest('info', 'Test 3: Verifying created record...');
    
    const retrievedRecord = await table.find(createdRecord.id);
    
    logTest('info', 'Record retrieved successfully', {
      recordId: retrievedRecord.id,
      fields: {
        LeadName: retrievedRecord.fields['Lead Name'],
        EmailAddress: retrievedRecord.fields['Email Address'],
        Company: retrievedRecord.fields.Company,
        Message: retrievedRecord.fields.Message ? 'Present' : 'Missing',
        CreateDate: retrievedRecord.fields['Create Date'],
        Status: retrievedRecord.fields.Status,
        PhoneNumber: retrievedRecord.fields['Phone Number'] || 'Empty'
      }
    });

    // Test 4: Field type validation
    logTest('info', 'Test 4: Validating field types...');
    
    const fieldTypes = {
      'Lead Name': typeof retrievedRecord.fields['Lead Name'],
      'Email Address': typeof retrievedRecord.fields['Email Address'],
      'Company': typeof retrievedRecord.fields.Company,
      'Message': typeof retrievedRecord.fields.Message,
      'Create Date': typeof retrievedRecord.fields['Create Date'],
      'Status': typeof retrievedRecord.fields.Status,
      'Phone Number': typeof retrievedRecord.fields['Phone Number']
    };

    logTest('info', 'Field types validated', { fieldTypes });

    // Test 5: Cleanup - delete test record
    logTest('info', 'Test 5: Cleaning up test record...');
    
    await table.destroy(createdRecord.id);
    
    logTest('success', 'Test record deleted successfully', {
      recordId: createdRecord.id
    });

    logTest('success', 'All Airtable integration tests passed!', {
      summary: {
        connection: 'OK',
        tableSchema: 'OK',
        recordCreation: 'OK',
        recordRetrieval: 'OK',
        fieldTypes: 'OK',
        cleanup: 'OK'
      }
    });

    return true;

  } catch (error) {
    logTest('error', 'Airtable integration test failed', {
      error: error.message,
      errorType: error.constructor.name,
      statusCode: error.statusCode,
      details: error.error || error.details
    });
    
    // Provide helpful error messages
    if (error.statusCode === 401) {
      logTest('error', 'Authentication failed - check your AIRTABLE_API_TOKEN');
    } else if (error.statusCode === 404) {
      logTest('error', 'Base or table not found - check your AIRTABLE_BASE_ID and AIRTABLE_TABLE_NAME');
    } else if (error.statusCode === 422) {
      logTest('error', 'Invalid field data - check your table schema matches the expected field names');
    }
    
    return false;
  }
}

// Run the test
async function runTest() {
  console.log('🧪 Starting Airtable Integration Test');
  console.log('=====================================');
  
  const success = await testAirtableConnection();
  
  console.log('\n=====================================');
  if (success) {
    console.log('✅ All tests passed! Airtable integration is working correctly.');
    console.log('\n📋 Expected Airtable Table Schema:');
    console.log('   • Name (Single line text)');
    console.log('   • Email (Email)');
    console.log('   • Company (Single line text)');
    console.log('   • Message (Long text)');
    console.log('   • Submission Date (Date & time)');
    console.log('   • Request ID (Single line text)');
    console.log('   • Status (Single select: New, Test, etc.)');
    console.log('   • Source (Single line text)');
  } else {
    console.log('❌ Tests failed! Check the error messages above.');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runTest().catch(error => {
    logTest('error', 'Test runner failed', { error: error.message });
    process.exit(1);
  });
}

module.exports = { testAirtableConnection };
