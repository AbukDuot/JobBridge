provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "JobBridge-app-rg"
  location = "South Africa North"
}

resource "azurerm_postgresql_flexible_server" "db" {
  name                   = "jobbridge-db"
  resource_group_name    = azurerm_resource_group.rg.name
  location               = azurerm_resource_group.rg.location
  administrator_login    = "jobadmin"
  administrator_password = var.db_password
  version                = "13"
  storage_mb             = 32768
  sku_name               = "B1ms"

  authentication {
    password_auth_enabled = true
  }

  lifecycle {
    ignore_changes = [zone]
  }
}

resource "azurerm_postgresql_flexible_server_database" "jobbridge_db" {
  name      = "jobbridge"
  server_id = azurerm_postgresql_flexible_server.db.id
  charset   = "UTF8"
  collation = "en_US.utf8"
}

resource "azurerm_container_registry" "acr" {
  name                = "jobbridge"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = true
}

resource "azurerm_app_service_plan" "plan" {
  name                = "jobbridge-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true
  sku {
    tier = "Basic"
    size = "B1"
  }
}
resource "azurerm_app_service" "app" {
  name                = "Jobbridge"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.plan.id

  site_config {
    linux_fx_version = "DOCKER|${azurerm_container_registry.acr.login_server}/jobbridge:latest"
  }

  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
    DOCKER_REGISTRY_SERVER_URL          = "https://${azurerm_container_registry.acr.login_server}"
    DOCKER_REGISTRY_SERVER_USERNAME     = azurerm_container_registry.acr.admin_username
    DOCKER_REGISTRY_SERVER_PASSWORD     = azurerm_container_registry.acr.admin_password
    DATABASE_URL                        = "postgres://${azurerm_postgresql_flexible_server.db.administrator_login}:${var.db_password}@${azurerm_postgresql_flexible_server.db.fqdn}:5432/jobbridge"
  }
}
