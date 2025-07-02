# JobBridge

## Project Objective

JobBridge is a professional Node.js/Express application designed to demonstrate best practices in project planning, repository security, application development, and automated Continuous Integration (CI).

---

## Table of Contents

- [Project Planning & Management](#project-planning--management)
- [Secure Repository Setup](#secure-repository-setup)
- [Application Development & CI](#application-development--ci)
- [Challenges and Solutions](#challenges-and-solutions)
- [Local Setup Instructions](#local-setup-instructions)
- [Links](#links)
- [License](#license)

---

## Project Planning & Management

- **Project Board:**  
  We use [GitHub Projects](https://github.com/AbukDuot/JobBridge/projects) to manage milestones and tasks.
- **Milestones:**  
  - Containerization  
  - Infrastructure as Code (IaC)  
  - Continuous Deployment (CD) Pipeline  
- **Task Breakdown:**  
  All major milestones are broken down into smaller, actionable tasks and tracked on the project board. Tasks move through columns: "To Do" → "In Progress" → "Done".

---

## Secure Repository Setup

- **Branching Strategy:**  
  - `main` branch for production-ready code  
  - `develop` branch for ongoing development
- **Branch Protection Rules:**  
  - Pull Request required before merging to `main`
  - At least one reviewer approval required
  - Status checks from CI pipeline must pass before merging

---

## Application Development & CI

- **Baseline Application:**  
  The initial version of JobBridge is a Node.js app using Express.
- **CI Pipeline:**  
  - Implemented using GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml))
  - Runs on Pull Requests to `main` and `develop`
  - Steps:
    - Lint code with ESLint
    - Run unit tests with Jest

---

## Challenges and Solutions

### 1. **Challenge:** Setting up ES Modules with Node.js and Jest  
**Solution:**  
Configured `"type": "module"` in `package.json` and used the latest Jest version that supports ES modules natively.

### 2. **Challenge:** Keeping environment variables secure  
**Solution:**  
Used a `.env` file for sensitive configuration and added it to `.gitignore` to prevent accidental commits.

### 3. **Challenge:** Enforcing code quality and standards  
**Solution:**  
Integrated ESLint for linting and set up a GitHub Actions workflow to automatically lint code and run tests on every pull request.

### 4. **Challenge:** Ensuring reliable CI/CD pipeline  
**Solution:**  
Created a GitHub Actions workflow that installs dependencies, lints code, and runs tests on every PR to `main` and `develop` branches.

### 5. **Challenge:** Managing tasks and project progress  
**Solution:**  
Utilized GitHub Projects to break down work into milestones and tasks, tracking progress visually and collaboratively.

---

## Local Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbukDuot/JobBridge.git
   cd JobBridge
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   DOTENV_CONFIG_SILENT=true
   ```

4. **Run the application locally:**
   ```sh
   npm start
   ```

5. **Run tests locally:**
   ```sh
   npm test
   ```

6. **Lint the code:**
   ```sh
   npm run lint
   ```

---

## Links

- **Public GitHub Repository:** [https://github.com/AbukDuot/JobBridge](https://github.com/AbukDuot/JobBridge)
- **Project Board:** [https://github.com/AbukDuot/JobBridge/projects](https://github.com/AbukDuot/JobBridge/projects)

---

## License

This project is licensed under the ISC License.
