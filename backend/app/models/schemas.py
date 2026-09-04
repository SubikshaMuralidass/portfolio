from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class ChatMessageRequest(BaseModel):
    message: str
    user_name: Optional[str] = None


class ChatMessageResponse(BaseModel):
    response: str


class APILogResponse(BaseModel):
    id: int
    endpoint: str
    method: str
    status_code: int
    response_time: float
    created_at: datetime

    class Config:
        from_attributes = True


class MetricsResponse(BaseModel):
    total_requests: int
    average_response_time: float
    error_rate: float
    top_endpoints: List[dict]
