#!/bin/sh

echo "INFO" "Running Migrations"
python3 manage.py migrate

echo "INFO" "Creating superuser"
cat << EOF | python3 manage.py shell > /dev/null
from django.contrib.auth.models import User
import os,sys
username = "admin"
email = "hannah@hannahwilloughby.dev"
password = "password"
if User.objects.filter(username=username).count == 0:
  User.objects.create_superuser(username, email, password)
  print('Created amin user', file=sys.stderr)
else:
  print("Admin user already exists", file=sys.stderr)

sys.stderr.flush()
EOF

python3 manage.py runserver
