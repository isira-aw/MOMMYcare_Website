# main.py

import uvicorn
from app import app  # Import the FastAPI app instance from app.py

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
