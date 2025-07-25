output "web_app_url" {
  value = azurerm_app_service.app.default_site_hostname
}

output "postgres_connection_string" {
  value     = "postgres://${azurerm_postgresql_flexible_server.db.administrator_login}:${var.db_password}@${azurerm_postgresql_flexible_server.db.fqdn}:5432/jobbridge"
  sensitive = true
}
