from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.config import settings
from app.db.database import engine, Base
from app.routes import ai_chat

# Create database tables on startup
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown logic"""
    # Startup
    Base.metadata.create_all(bind=engine)
    print("✓ Database tables created")
    print("✓ Portfolio API started")
    yield
    # Shutdown
    print("✓ Portfolio API shutdown")


# Create FastAPI app
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request logging middleware
# Include routers
app.include_router(ai_chat.router)


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to Subiksha's Portfolio API",
        "version": settings.APP_VERSION,
        "docs": "/docs",
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
    )
