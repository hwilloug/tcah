FROM python:3.9.16-alpine as development
EXPOSE 8000
WORKDIR /app
COPY . /app
RUN pip install pipenv
RUN pipenv install --system --dev
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

FROM python:3.9.16-alpine as production
EXPOSE 8000
WORKDIR /app
COPY . /app
RUN pip install pipenv
RUN pipenv install --system
ENTRYPOINT [ "python3" ]
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
