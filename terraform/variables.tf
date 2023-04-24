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

variable "region" {
  description = "The AWS region to create resources in"
  default     = "us-east-1"
}