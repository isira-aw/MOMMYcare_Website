# main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = FastAPI()

# CORS configuration
origins = [
    "http://localhost",
    "http://localhost:3000",  # Add your frontend URL if different
    # Add other origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Pydantic model for request body
class EmailRequest(BaseModel):
    name: str
    email: str
    message: str

@app.post("/send_email/")
async def send_email(request: EmailRequest):
    sender_email = "your-email@gmail.com"
    receiver_email = "mommycareplus@gmail.com"
    password = os.getenv("EMAIL_PASSWORD")  # Store your password as an environment variable

    # Create the email content
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = f"Message from {request.name} via Contact Us Form"

    body = f"Name: {request.name}\nEmail: {request.email}\n\nMessage:\n{request.message}"
    message.attach(MIMEText(body, "plain"))

    try:
        # Connect to the Gmail SMTP server
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())
        server.close()
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {e}")
