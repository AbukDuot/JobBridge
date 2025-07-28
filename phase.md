# Containerization & Infrastructure as Code

## Objectives

-  Containerize the jobbridge application
-  Define cloud infrastructure as code using Terraform
-  Perform manual cloud deployment
-  Conduct peer code review
- Document the process and challenges


##  1. Live Deployed URL

Here is the public URL of my deployed application:

 *Live Application*: [Live link to jobbridge website](http://jobbridge.azurewebsites.net/)


##  2. Screenshots of Provisioned Resources

Below are screenshots of the resources I provisioned in Azure:

###  Resource Group
[Resource Group](./screenshots/resource-group.png)
###  App Service
[App services](./screenshots/webapp.png)
###  Azure Container Registry 
[ACR](./screenshots/acr.png)

##  3. Peer Review Pull Request

I have reviewed a peer's pull request as part of the assignment:

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



 
