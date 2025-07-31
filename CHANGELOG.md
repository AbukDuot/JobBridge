# Changelog

This document tracks all significant updates and improvements made to the JobBridge project over time.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and the project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for version control.

## [Unreleased]

### Planned
- Additional monitoring metrics and alert configurations.
- Enhanced frontend UI for better user experience.


## [3.0.0] - 2025-07-28

### Added
- **Full Continuous Deployment 
### Added
- **Full CI/CD Pipeline**: Implemented an automated Continuous Deployment pipeline with GitHub Actions.
- **Automated Deployments**: Merges to `main` trigger a full deployment sequence to Azure Web App.
- **DevSecOps Integration**: Added `npm audit` for dependency vulnerability scanning and container security scanning.
- **Monitoring and Observability**: Configured application logging, created a monitoring dashboard, and added an operational alarm for system health.
- **Release Management**: Introduced and maintained a `CHANGELOG.md` file to document all updates and adopted Conventional Commits for clear version tracking.


### Changed
- Updated GitHub Actions workflows (`ci.yml` for CI and `deploy.yml` for CD) to ensure automated deployment to staging and production.

### Fixed
- Resolved issues with Azure Resource Group creation and deployment authentication.

## [2.0.0] - 2025-07-20

### Added
- **Containerization**: Created a Dockerfile to package the Node.js application.
- **Azure Container Registry Integration**: Pushed images to ACR for deployment.
- **CI Pipeline**: Configured GitHub Actions (`ci.yml`) to run linting and tests on pull requests.

## [1.0.0] - 2025-07-10

### Added
- Initial JobBridge application setup using Node.js
- CI pipeline for linting and testing on pull requests.
