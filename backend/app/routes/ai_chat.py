from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.schemas import ChatMessageRequest, ChatMessageResponse
from app.services.service import ChatService
from app.services.ai_service import get_ai_assistant

router = APIRouter(prefix="/api/ai-chat", tags=["ai"])


@router.post("/", response_model=ChatMessageResponse)
async def chat(
    request: ChatMessageRequest,
    db: Session = Depends(get_db),
):
    """
    AI Chat endpoint
    
    Accepts a message and optional user name.
    Returns AI-generated response using LangChain and OpenAI.
    Responses are logged in the database.
    """
    if not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    try:
        # Get AI assistant instance (uses real API if available, fallback otherwise)
        ai_assistant = get_ai_assistant()
        
        # Generate response
        response = ai_assistant.generate_response(
            message=request.message,
            user_name=request.user_name or "User"
        )

        # Save to chat history
        ChatService.save_chat_history(
            db=db,
            user_name=request.user_name or "Anonymous",
            message=request.message,
            response=response,
        )

        return ChatMessageResponse(response=response)

    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail="Failed to generate response")


