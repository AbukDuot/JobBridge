variable "db_password" {
  description = "The admin password for the PostgreSQL server"
  type        = string
  sensitive   = true
}
