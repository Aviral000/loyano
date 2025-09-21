# 🚀 LOYANO GitHub Workflows

This directory contains GitHub Actions workflows for the LOYANO project to ensure code quality, security, and consistent development practices.

## 📋 Workflows

### 🔍 PR Checks (`pr-checks.yml`)

Automatically runs on every pull request to ensure:

#### ✅ PR Naming Convention Check
- Enforces conventional commit format
- Allowed types: `feat`, `fix`, `update`, `update-design`, `refactor`, `docs`, `style`, `test`, `chore`, `ci`, `perf`, `build`, `revert`
- Prevents WIP/temp/test scopes
- Ensures proper subject formatting

#### 🧪 Test and Build
- **Linting**: ESLint checks with Next.js config
- **Type Checking**: TypeScript compilation without emit
- **Testing**: Jest unit tests with coverage reporting
- **Build**: Next.js production build verification
- **Coverage**: Uploads coverage reports to Codecov

#### 🔒 Security Audit
- **NPM Audit**: Scans for known vulnerabilities
- **Audit CI**: Configurable security checks
- **Dependency Review**: Checks for security issues in dependencies

#### 📊 Bundle Size Check
- **Bundle Analysis**: Analyzes JavaScript bundle size
- **Performance Monitoring**: Tracks bundle size changes
- **Optimization Suggestions**: Identifies large dependencies

#### 📝 PR Summary
- **Automated Comments**: Posts summary of all checks
- **Status Overview**: Visual status of each check
- **Action Items**: Clear next steps for failed checks

## 🎯 PR Naming Convention

### ✅ Valid Examples:
```
feat: add chatbot auto-close functionality
fix: resolve tutorial pointer positioning issue
update: improve hero section animations
update-design: enhance navigation menu styling
refactor: extract tutorial components into modules
docs: update README with new features
test: add unit tests for chatbot store
chore: update dependencies to latest versions
```

### ❌ Invalid Examples:
```
WIP: working on chatbot
temp: temporary fix
test: testing something
Update: Fix navigation (starts with uppercase)
```

## 🛠️ Local Development

### Running Checks Locally

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Security audit
npm run audit

# Build application
npm run build

# Bundle analysis
npm run analyze
```

### Pre-commit Setup

Install husky for pre-commit hooks:

```bash
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

Add to `package.json`:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

## 📊 Coverage Requirements

The workflow enforces minimum coverage thresholds:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## 🔧 Configuration Files

- `audit-ci.json` - Security audit configuration
- `jest.config.js` - Jest testing configuration
- `jest.setup.js` - Jest setup and mocks
- `pull_request_template.md` - PR template
- `commit_template.txt` - Commit message template

## 🚨 Troubleshooting

### Common Issues

1. **PR Naming Check Fails**
   - Ensure PR title follows conventional commit format
   - Use lowercase for the type
   - Avoid WIP, temp, or test scopes

2. **Tests Fail**
   - Run tests locally: `npm run test`
   - Check test coverage: `npm run test:coverage`
   - Update tests for new functionality

3. **Build Fails**
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Ensure all dependencies are installed

4. **Security Audit Fails**
   - Review vulnerabilities: `npm audit`
   - Update dependencies: `npm audit fix`
   - Add exceptions to `audit-ci.json` if needed

## 📈 Metrics and Monitoring

The workflow provides:
- **Code Coverage**: Tracked via Codecov
- **Bundle Size**: Monitored for performance
- **Security**: Regular vulnerability scans
- **Quality**: Automated code quality checks

## 🔄 Workflow Triggers

- **Pull Request**: `opened`, `edited`, `synchronize`
- **Branches**: `main`, `develop`
- **Conditions**: Only runs on non-draft PRs

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Next.js Testing](https://nextjs.org/docs/testing)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [GitHub Actions](https://docs.github.com/en/actions)
