from sqlalchemy.orm import Session
from app.models.models import ChatHistory
from typing import List


class ChatService:
    @staticmethod
    def save_chat_history(
        db: Session,
        user_name: str,
        message: str,
        response: str,
    ) -> ChatHistory:
        chat = ChatHistory(
            user_name=user_name,
            message=message,
            response=response,
        )
        db.add(chat)
        db.commit()
        return chat

    @staticmethod
    def get_user_history(db: Session, user_name: str) -> List[ChatHistory]:
        return db.query(ChatHistory).filter(
            ChatHistory.user_name == user_name
        ).order_by(ChatHistory.created_at).all()