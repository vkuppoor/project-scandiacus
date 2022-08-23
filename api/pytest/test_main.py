from fastapi import FastAPI
from fastapi.testclient import TestClient
from fast_api_app.main import app


client = TestClient(app)


def test_write_to_output():
    data = get_data()
    response = client.get("/write-to-output/YOLO", json = data)
    assert response.status_code == 200
    assert response.json() == {}