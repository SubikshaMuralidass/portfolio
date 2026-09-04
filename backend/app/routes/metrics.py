from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.schemas import MetricsResponse
from app.services.service import APILogService

router = APIRouter(prefix="/api", tags=["metrics"])


@router.get("/metrics", response_model=MetricsResponse)
async def get_metrics(db: Session = Depends(get_db)):
    """
    Get API metrics
    
    Returns:
    - Total requests processed
    - Average response time
    - Error rate
    - Top endpoints
    """
    metrics = APILogService.get_metrics(db)
    return MetricsResponse(**metrics)


@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "API is running"}
