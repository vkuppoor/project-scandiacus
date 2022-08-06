# FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

# WORKDIR /app/api

# COPY ./requirements.txt .

# RUN pip install -r requirements.txt

# COPY . .

#################################################

FROM python:3.10

WORKDIR /app/api

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

#################################################

CMD ["uvicorn", "fast_api_app.main:app", "--host", "0.0.0.0"]

#########################################################################

# FROM python:3.10

# WORKDIR /app/api

# COPY requirements.txt .

# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .

# EXPOSE 8000

# CMD ["uvicorn", "fast_api_app.main:app", "--host", "0.0.0.0"]