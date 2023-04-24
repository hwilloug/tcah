aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 132507767948.dkr.ecr.us-east-1.amazonaws.com

docker build --platform linux/amd64 -t tcah-repo .

docker tag tcah-repo:latest 132507767948.dkr.ecr.us-east-1.amazonaws.com/tcah-repo:latest

docker push 132507767948.dkr.ecr.us-east-1.amazonaws.com/tcah-repo:latest