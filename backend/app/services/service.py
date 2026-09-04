from sqlalchemy.orm import Session
from app.models.models import APILog, ChatHistory
from typing import List
from datetime import datetime, timedelta

class APILogService:
    @staticmethod
    def log_request(
        db: Session,
        endpoint: str,
        method: str,
        status_code: int,
        response_time: float,
    ) -> APILog:
        log = APILog(
            endpoint=endpoint,
            method=method,
            status_code=status_code,
            response_time=response_time,
        )
        db.add(log)
        db.commit()
        return log

    @staticmethod
    def get_metrics(db: Session) -> dict:
        # Total requests
        total_requests = db.query(APILog).count()

        # Average response time
        avg_response_time = 0.0
        if total_requests > 0:
            result = db.query(APILog).all()
            avg_response_time = sum(log.response_time for log in result) / total_requests

        # Error rate
        error_count = (
            db.query(APILog).filter(APILog.status_code >= 400).count()
        )
        error_rate = (error_count / total_requests * 100) if total_requests > 0 else 0

        # Top endpoints
        top_endpoints = db.query(
            APILog.endpoint, 
        ).group_by(APILog.endpoint).order_by(
            db.func.count(APILog.id).desc()
        ).limit(10).all()

        return {
            "total_requests": total_requests,
            "average_response_time": round(avg_response_time, 2),
            "error_rate": round(error_rate, 2),
            "top_endpoints": [
                {"endpoint": endpoint[0], "count": 0} 
                for endpoint in top_endpoints
            ],
        }


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
