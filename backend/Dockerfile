FROM python:3.9.16-alpine as development
EXPOSE 8000
WORKDIR /app
COPY . /app
RUN pip install pipenv
RUN pipenv install --system --dev
ENTRYPOINT ["/app/docker-entrypoint.sh"]

FROM python:3.9.16-alpine as production
EXPOSE 8000
WORKDIR /app
COPY . /app
RUN pip install pipenv
RUN pipenv install --system
ENTRYPOINT ["/app/docker-entrypoint.sh"]