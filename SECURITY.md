# Security Policy

## Supported Versions
We are currently supporting only the `main` branch of JobBridge.  
All security patches and updates will be applied here.

| Version | Supported |
| ------- | --------- |
| main    | Yes    |
| develop | Testing Only |

---

## Reporting a Vulnerability
If you discover a vulnerability in this project:
1. Do not open a public issue.
2. Contact the project maintainer directly at: [your-email@example.com].
3. Provide as much detail as possible, including steps to reproduce the issue.

We aim to respond within **48 hours** and will provide updates until the issue is resolved.

---

## Security Scans

- **Dependency Scanning**  
  - Automated via `npm audit` in the GitHub Actions CI/CD pipeline.
  - Any vulnerabilities with severity **Moderate or higher** are flagged and require remediation before deployment.

- **Container Image Scanning**  
  - Performed with **Trivy** during the CD pipeline run.
  - Scans all application and OS-level packages for CRITICAL and HIGH vulnerabilities.
  - Results are output in the GitHub Actions logs for every build.

---

## Remediation Process
- **Critical & High vulnerabilities**: Must be patched immediately.
- **Moderate vulnerabilities**: Reviewed and addressed within 7 days.
- **Low vulnerabilities**: Documented and monitored; patches applied during regular maintenance.

---

## Responsible Disclosure
We encourage responsible disclosure.  
Please report security issues privately so we can resolve them before public disclosure.

---

## Security Best Practices Followed
- All secrets (e.g., Azure credentials, registry passwords) are stored in **GitHub Secrets**, never in code.
- Environment variables managed via `.env` file excluded from source control.
- Regular updates of dependencies to minimize exposure to known vulnerabilities.
- CI/CD pipeline enforces security scans before production deployment.
