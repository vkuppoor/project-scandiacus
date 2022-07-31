FROM python:3.10

WORKDIR /app/api

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "fast_api_app.main:app", "--host", "0.0.0.0"]