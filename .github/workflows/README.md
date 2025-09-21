# 🚀 LOYANO GitHub Workflows

This directory contains modular GitHub Actions workflows for the LOYANO project, organized by functionality for better maintainability and performance.

## 📋 Workflow Overview

### 🔍 **PR Naming Check** (`pr-naming-check.yml`)
- **Trigger**: Pull requests to `main` or `develop`
- **Purpose**: Enforces conventional commit naming conventions
- **Features**:
  - Validates PR titles against conventional commit format
  - Supports: `feat`, `fix`, `update`, `update-design`, `refactor`, `docs`, `style`, `test`, `chore`, `ci`, `perf`, `build`, `revert`
  - Prevents invalid scopes: `wip`, `temp`, `test`
  - Ensures proper subject formatting

### 🧪 **Test and Build** (`test-and-build.yml`)
- **Trigger**: Pull requests and pushes to `main` or `develop`
- **Purpose**: Ensures code quality and buildability
- **Features**:
  - ESLint code linting
  - TypeScript type checking
  - Jest unit tests with coverage
  - Next.js production build
  - Codecov coverage reporting

### 🔒 **Security Audit** (`security-audit.yml`)
- **Trigger**: Pull requests, pushes, and daily schedule (2 AM UTC)
- **Purpose**: Identifies security vulnerabilities
- **Features**:
  - NPM audit for known vulnerabilities
  - Audit CI with configurable security checks
  - Artifact upload for security reports
  - Daily automated security scanning

### 📊 **Bundle Analysis** (`bundle-analysis.yml`)
- **Trigger**: Pull requests and pushes to `main` or `develop`
- **Purpose**: Monitors bundle size and performance
- **Features**:
  - Next.js bundle analyzer
  - Bundle size tracking
  - Performance optimization suggestions
  - Artifact upload for analysis reports

### 📝 **PR Summary** (`pr-summary.yml`)
- **Trigger**: Pull requests to `main` or `develop`
- **Purpose**: Provides comprehensive PR status overview
- **Features**:
  - Aggregates results from all other workflows
  - Visual status indicators (✅❌⏳)
  - PR metadata display
  - Automated status comments

### 🚀 **Deploy** (`deploy.yml`)
- **Trigger**: Pushes to `main` and manual dispatch
- **Purpose**: Automated deployment to production/staging
- **Features**:
  - Vercel deployment integration
  - GitHub Pages staging deployment
  - Environment-specific deployments
  - Deployment status notifications

### 📦 **Dependency Update** (`dependency-update.yml`)
- **Trigger**: Weekly schedule (Mondays 9 AM UTC) and manual dispatch
- **Purpose**: Monitors and reports dependency updates
- **Features**:
  - Outdated package detection
  - Security vulnerability scanning
  - Automated issue creation for major updates
  - Dependency report generation

## 🎯 Workflow Benefits

### ✅ **Modular Design**
- **Single Responsibility**: Each workflow has one clear purpose
- **Independent Execution**: Workflows can run in parallel
- **Easy Maintenance**: Update individual workflows without affecting others
- **Selective Triggers**: Different workflows for different events

### ⚡ **Performance Optimized**
- **Parallel Execution**: Multiple workflows run simultaneously
- **Conditional Runs**: Skip unnecessary workflows based on conditions
- **Caching**: Node.js and npm dependencies are cached
- **Artifact Management**: Efficient storage and retrieval of build artifacts

### 🔧 **Developer Experience**
- **Clear Status**: Visual indicators for each check
- **Detailed Reports**: Comprehensive feedback on PR quality
- **Automated Actions**: Reduces manual intervention
- **Flexible Deployment**: Support for multiple environments

## 📊 Workflow Matrix

| Workflow | PR Trigger | Push Trigger | Schedule | Manual | Purpose |
|----------|------------|--------------|----------|---------|---------|
| PR Naming | ✅ | ❌ | ❌ | ❌ | Convention check |
| Test & Build | ✅ | ✅ | ❌ | ❌ | Quality assurance |
| Security Audit | ✅ | ✅ | ✅ | ✅ | Vulnerability scan |
| Bundle Analysis | ✅ | ✅ | ❌ | ❌ | Performance check |
| PR Summary | ✅ | ❌ | ❌ | ❌ | Status overview |
| Deploy | ❌ | ✅ | ❌ | ✅ | Deployment |
| Dependency Update | ❌ | ❌ | ✅ | ✅ | Maintenance |

## 🛠️ Configuration

### **Required Secrets**
```yaml
# For deployment
VERCEL_TOKEN: "your-vercel-token"
VERCEL_ORG_ID: "your-org-id"
VERCEL_PROJECT_ID: "your-project-id"

# For coverage reporting
CODECOV_TOKEN: "your-codecov-token"
```

### **Environment Variables**
```yaml
# Node.js version
NODE_VERSION: "18"

# Cache configuration
CACHE_DEPENDENCY_PATH: "apps/home/package-lock.json"
```

## 🚨 Troubleshooting

### **Common Issues**

1. **Workflow Not Triggering**
   - Check branch names in workflow triggers
   - Verify file paths and conditions
   - Ensure workflow files are in `.github/workflows/`

2. **Permission Errors**
   - Verify `permissions` section in workflow files
   - Check GitHub token permissions
   - Ensure repository settings allow workflow actions

3. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review error logs in workflow runs

4. **Deployment Issues**
   - Verify deployment secrets are configured
   - Check environment settings
   - Review deployment logs

### **Debug Commands**
```bash
# Test workflows locally
act -j pr-naming-check
act -j test-and-build

# Check workflow syntax
yamllint .github/workflows/*.yml

# Validate workflow files
gh workflow list
gh workflow view pr-naming-check
```

## 📈 Monitoring

### **Workflow Status**
- **GitHub Actions Tab**: View all workflow runs
- **PR Checks**: See individual check results
- **Artifacts**: Download build reports and analysis
- **Notifications**: Get alerts for failed workflows

### **Metrics to Track**
- **Success Rate**: Percentage of successful workflow runs
- **Execution Time**: Average time for each workflow
- **Failure Causes**: Common reasons for workflow failures
- **Resource Usage**: CPU and memory consumption

## 🔄 Maintenance

### **Regular Tasks**
- **Weekly**: Review dependency update reports
- **Monthly**: Update workflow actions to latest versions
- **Quarterly**: Review and optimize workflow performance
- **As Needed**: Update secrets and environment variables

### **Version Updates**
```bash
# Update workflow actions
npx @github/dependabot-core update-workflow-actions

# Check for outdated actions
gh workflow list --json name,path,state
```

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [Vercel Integration](https://vercel.com/docs/concepts/integrations/vercel-for-github)
