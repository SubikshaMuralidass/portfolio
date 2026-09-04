from datetime import datetime
from sqlalchemy import Column, String, DateTime, Integer, Float, Text
from app.db.database import Base


class APILog(Base):
    """Log for tracking API requests"""
    __tablename__ = "api_logs"

    id = Column(Integer, primary_key=True, index=True)
    endpoint = Column(String, index=True)
    method = Column(String)
    status_code = Column(Integer)
    response_time = Column(Float)  # in milliseconds
    created_at = Column(DateTime, default=datetime.utcnow, index=True)


class ChatHistory(Base):
    """Store chat conversations"""
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String)
    message = Column(Text)
    response = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
