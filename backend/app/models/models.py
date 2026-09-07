from datetime import datetime
from sqlalchemy import Column, String, DateTime, Integer, Text
from app.db.database import Base


class ChatHistory(Base):
    """Store chat conversations"""
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String)
    message = Column(Text)
    response = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)