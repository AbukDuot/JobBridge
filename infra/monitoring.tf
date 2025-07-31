provider "azurerm" {
  features {}
}

resource "azurerm_log_analytics_workspace" "jobbridge_logs" {
  name                = "jobbridge-law"
  location            = azurerm_resource_group.jobbridge.location
  resource_group_name = azurerm_resource_group.jobbridge.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_application_insights" "jobbridge_appinsights" {
  name                = "jobbridge-ai"
  location            = azurerm_resource_group.jobbridge.location
  resource_group_name = azurerm_resource_group.jobbridge.name
  application_type    = "web"
  workspace_id        = azurerm_log_analytics_workspace.jobbridge_logs.id
}

resource "azurerm_monitor_metric_alert" "jobbridge_alert" {
  name                = "jobbridge-highcpu-alert"
  resource_group_name = azurerm_resource_group.jobbridge.name
  scopes              = [azurerm_app_service.jobbridge_webapp.id]
  description         = "Alert when CPU usage exceeds 80% for 5 minutes"

  criteria {
    metric_namespace = "Microsoft.Web/sites"
    metric_name      = "CpuPercentage"
    aggregation      = "Average"
    operator         = "GreaterThan"
    threshold        = 80
  }

  action {
    action_group_id = azurerm_monitor_action_group.jobbridge_action_group.id
  }
}

resource "azurerm_monitor_action_group" "jobbridge_action_group" {
  name                = "jobbridge-ag"
  resource_group_name = azurerm_resource_group.jobbridge.name
  short_name          = "jobbridge"

  email_receiver {
    name          = "DevOpsTeam"
    email_address = "a.duot@alustudent.com"
  }
}

