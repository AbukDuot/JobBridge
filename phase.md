## `phase.md` File – Deployment & Reflection

### `phase.md` Template:
```md
## Live Application URL
http://jobbridge.azurewebsites.net

## Screenshots of Azure Resources

### Azure Container Registry

https://github.com/AbukDuot/JobBridge/blob/develop/screenshots/Screenshot%202025-07-24%20030228.png

### Web App Resource

<img width="1355" height="589" alt="Screenshot 2025-07-24 140741" src="https://github.com/user-attachments/assets/01c7bbd9-f37d-41c6-8e13-8db87cbbdeec" />

---

## Peer Review Pull Request

I reviewed this peer's pull request:

*Peer PR Review*: [https://github.com/dorcusmalony/HerRaise_Planning_CI-Foundation/pull/28/]


## 4. Reflection on Challenges

### Infrastructure as Code Challenges
- *Azure Provider Learning*: Acess  Azure Terraform providers was not easy as and it  required understanding different resource structures
- *Resource Dependencies*: Managing the correct order of resource creation, especially with networking and database connections was that easy 
- *Terraform State*: Understanding how to properly manage Terraform state for team collaboration

### Manual Deployment Process
- *Container Registry Setup*: Initially struggled with ACR authentication and permissions
- *App Service Configuration*: Learning to properly configure environment variables and container settings
- *Database Connectivity*: Ensuring the App Service could connect to PostgreSQL with proper firewall rules
