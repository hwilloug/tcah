variable "app_count" {
  description = "Number of Docker containers to run"
  default     = 2
}

variable "docker_image_url_django" {
  description = "Docker image to run in the ECS cluster"
  default     = "132507767948.dkr.ecr.us-east-1.amazonaws.com/tcah-repo:latest"
}

variable "ecs_cluster_name" {
  description = "Name of the ECS cluster"
  default     = "tcah-production"
}

variable "health_check_path" {
  description = "Health check path for the default target group"
  default     = "/health_check/"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "log_retention_in_days" {
  default = 30
}

variable "rds_db_name" {
  description = "RDS database name"
  default     = "mydb"
}

variable "rds_username" {
  description = "RDS database username"
  default     = "foo"
}

variable "rds_password" {
  description = "RDS database password"
}

variable "rds_instance_class" {
  description = "RDS instance type"
  default     = "db.t2.micro"
}

variable "region" {
  description = "The AWS region to create resources in"
  default     = "us-east-1"
}