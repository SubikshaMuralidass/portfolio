from fastapi import Request
from time import time
from app.services.service import APILogService
from sqlalchemy.orm import Session


async def log_request_middleware(request: Request, call_next):
    """
    Middleware to log API requests
    Tracks endpoint, method, status code, and response time
    """
    start_time = time()
    
    # Get or create DB session for logging
    from app.db.database import SessionLocal
    db = SessionLocal()
    
    try:
        response = await call_next(request)
        
        # Calculate response time in milliseconds
        response_time = (time() - start_time) * 1000
        
        # Log the request
        APILogService.log_request(
            db=db,
            endpoint=request.url.path,
            method=request.method,
            status_code=response.status_code,
            response_time=response_time,
        )
        
        return response
    finally:
        db.close()
