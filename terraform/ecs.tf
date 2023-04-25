resource "aws_ecs_cluster" "production" {
  name = "${var.ecs_cluster_name}-cluster"
}

resource "aws_ecs_task_definition" "app_task" {
  family                = "${var.ecs_cluster_name}-django-app"
  depends_on            = [aws_db_instance.production]
  container_definitions = <<DEFINITION
[
  {
    "name": "${var.ecs_cluster_name}-django-app",
    "image": "${var.docker_image_url_django}",
    "essential": true,
    "cpu": 256,
    "memory": 512,
    "links": [],
    "portMappings": [
      {
        "containerPort": 8000,
        "hostPort": 8000,
        "protocol": "tcp"
      }
    ],
    "command": ["manage.py", "runserver", "0.0.0.0:8000"],
    "environment": [
      {
        "name": "RDS_DB_NAME",
        "value: "${var.rds_db_name}"
      },
      {
        "name": "RDS_USERNAME",
        "value": "${var.rds_username}"
      },
      {
        "name": "RDS_PASSWORD",
        "value": "${var.rds_password}"
      },
      {
        "name": "RDS_HOSTNAME",
        "value": "${aws_db_instance.production.address}"
      },
      {
        "name": "RDS_PORT",
        "value": "5432"
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "/ecs/django-app",
        "awslogs-region": "${var.region}",
        "awslogs-stream-prefix": "django-app-log-stream"
      }
    }
  }
]
  DEFINITION
  
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = "${aws_iam_role.ecsTaskExecutionRole.arn}"
}

resource "aws_ecs_service" "app_service" {
  name            = "${var.ecs_cluster_name}-service"     # Name the service
  cluster         = "${aws_ecs_cluster.production.id}"   # Reference the created Cluster
  task_definition = "${aws_ecs_task_definition.app_task.arn}" # Reference the task that the service will spin up
  launch_type     = "FARGATE"
  desired_count   = var.app_count

  load_balancer {
    target_group_arn = "${aws_lb_target_group.target_group.arn}" # Reference the target group
    container_name   = "${aws_ecs_task_definition.app_task.family}"
    container_port   = 8000 # Specify the container port
  }

  network_configuration {
    subnets          = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}"]
    assign_public_ip = true     # Provide the containers with public IPs
    security_groups  = ["${aws_security_group.service_security_group.id}"] # Set up the security group
  }
}