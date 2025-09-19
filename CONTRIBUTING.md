# Contributing to RiptideB2B

Thank you for your interest in contributing to RiptideB2B! This document provides guidelines and information for contributors.

## Development Setup

1. **Fork and clone** the repository
2. **Install dependencies**: `npm install`
3. **Set up environment**: Copy `env.example` to `env.local` and configure
4. **Run tests**: `npm run test:unit && npm run test:integration`
5. **Start development**: `npm run dev`

## Code Standards

### JavaScript/React
- Use **functional components** with hooks
- Follow **ESLint** rules (configured in package.json)
- Use **Prettier** for code formatting
- Write **JSDoc comments** for complex functions

### CSS/Styling
- Use **Tailwind CSS** utility classes
- Follow the **oceanic theme** (teal/blue gradients)
- Maintain **responsive design** principles
- Use **semantic HTML** elements

### Testing
- Write **unit tests** for all utility functions
- Include **integration tests** for API endpoints
- Maintain **>80% test coverage**
- Test **error scenarios** and edge cases

## Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(contact): add Airtable integration for form storage
fix(api): handle email service failures gracefully
docs(readme): update setup instructions for new dependencies
```

## Pull Request Process

1. **Create feature branch** from `main`
2. **Write tests** for new functionality
3. **Update documentation** if needed
4. **Run all tests**: `npm run test:unit && npm run test:integration`
5. **Submit PR** with clear description

### PR Requirements
- ✅ All tests passing
- ✅ Code follows style guidelines
- ✅ Documentation updated
- ✅ No security vulnerabilities
- ✅ Build succeeds

## Security Guidelines

### Sensitive Data
- **Never commit** API keys or secrets
- Use **environment variables** for configuration
- **Sanitize user input** in forms and APIs
- **Validate data** on both client and server

### External Services
- **Brevo API**: Handle rate limits and failures
- **Airtable API**: Validate permissions and schema
- **Vercel**: Configure proper environment variables

## Testing Guidelines

### Unit Tests
- Test **individual functions** in isolation
- Mock **external dependencies**
- Test **error conditions**
- Use **descriptive test names**

### Integration Tests
- Test **API endpoints** with real services
- Verify **data persistence**
- Test **email delivery**
- Clean up **test data**

## Deployment

### Environment Variables
Required in production:
```
BREVO_API_KEY=production_key
OWNER_EMAIL=sales@riptideb2b.com
AIRTABLE_API_TOKEN=production_token
AIRTABLE_BASE_ID=production_base
AIRTABLE_TABLE_NAME=production_table
```

### Deployment Process
1. **Merge to main** branch
2. **Automatic deployment** via Vercel
3. **Verify functionality** on production
4. **Monitor logs** for errors

## Issue Reporting

### Bug Reports
Include:
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Environment details**
- **Error messages/logs**

### Feature Requests
Include:
- **Use case description**
- **Proposed solution**
- **Alternative considerations**
- **Impact assessment**

## Code Review

### As a Reviewer
- **Check functionality** and edge cases
- **Verify tests** are comprehensive
- **Ensure security** best practices
- **Validate documentation** updates

### As an Author
- **Respond to feedback** promptly
- **Make requested changes**
- **Ask questions** if unclear
- **Update tests** if needed

## Contact

- **Technical questions**: Create GitHub issue
- **Security concerns**: Email security@riptideb2b.com
- **General inquiries**: Contact via contact form

## License

By contributing, you agree that your contributions will be licensed under the same terms as the project.
