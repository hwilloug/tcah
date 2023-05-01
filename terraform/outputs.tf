output "backend_url" {
  value = aws_alb.application_load_balancer.dns_name
}

output "frontend_url" {
  value = aws_cloudfront_distribution.cf_distribution.domain_name
}