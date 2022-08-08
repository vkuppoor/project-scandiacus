import os
from collections import defaultdict
from typing import List

from fastapi import Depends, FastAPI, HTTPException


from . import crud, models, schemas

app = FastAPI()


@app.get(
    "/test",
    tags=["testing"],
)
def test() -> dict:
    """Tests the api to make sure it is running.

    Args:
        None

    Returns:
        "Hello World"
    """
    return "Hello World"
