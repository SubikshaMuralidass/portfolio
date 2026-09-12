import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    # App
    APP_NAME: str = "Subiksha Portfolio API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "False") == "True"
    
    # Database
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql://user:password@localhost:5433/portfolio_db"
    )
    
    # CORS
    ALLOWED_ORIGINS: list = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",

    # Production frontend
        "https://www.subikshamuralidass.tech",
        "https://subikshamuralidass.tech",
        "https://red-water-04697cc00.3.azurestaticapps.net",
    ]
    
    # AI/LLM
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-3.5-flash")  
    # Redis (optional)
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    
    # API Rate limits
    MAX_REQUESTS_PER_MINUTE: int = 60

settings = Settings()
