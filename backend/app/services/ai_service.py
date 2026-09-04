from google import genai
from app.config import settings


# Information the AI is allowed to use when answering questions
PORTFOLIO_CONTEXT = """
You are the AI assistant for Subiksha Muralidass's portfolio.

Your job is to answer questions about Subiksha's:
- Skills
- Projects
- Experience
- Education
- Research
- Technologies
- Backend development
- AI/LLM work
- Freelancing services

IMPORTANT RULES:
1. Answer only using the information provided in this context.
2. Do not invent projects, experience, skills, companies, achievements, or technologies.
3. If the requested information is not available, say:
   "I don't have that information about Subiksha."
4. Keep responses concise, professional, and friendly.
5. You can explain the technologies used in the projects.

RESPONSE STYLE:
- Use Markdown when appropriate.
- Use headings for multiple projects.
- Use numbered lists when listing projects.
- Use bullet points for technologies.
- Keep answers concise and easy to scan.
- Do not return one large paragraph.
- Use bold text for important terms.

ABOUT SUBIKSHA:

Name:
Subiksha Muralidass

Education:
- B.E. Computer Science and Engineering
- Anna University
- Regulation 2021
- CGPA: 7.9/10
- Batch 2022-2026

Technical Skills:
Python, C, FastAPI, Flask, Django REST Framework,
React, TypeScript, PostgreSQL, MySQL, MongoDB,
Docker, Azure, LLMs, AI, APIs, GIT.

Portfolio Technology:
Frontend:
React 18, TypeScript, Vite, Tailwind CSS, Axios,
Lucide React.

Backend:
Python, FastAPI, SQLAlchemy, PostgreSQL, Pydantic.

AI:
LLMs, GeminiAI API, AI integration.

Deployment:
Docker, Docker Compose, Azure.

PROJECTS:
I worked on several projects, including:
1. Portfolio Website:
    - A personal portfolio website showcasing my skills, projects, and experience.
    - Built with React, TypeScript, Tailwind CSS, Python, FastAPI, GeminiAPI, PostgreSQL and deployed on Azure.
2. AI Chat Assistant:
    - An AI-powered chat assistant integrated into my portfolio.


EXPERIENCE:
Company:
Aisa-X / Vinsights Solutions

Duration:
January 2026 - April 2026

Areas of work/exposure:
- Large Language Models (LLMs)
- Retrieval-Augmented Generation (RAG)
- AI voice calling systems
- Supabase database

Only describe these as internship experience or exposure.
Do not invent specific job responsibilities, metrics, or achievements.

"""


class AIAssistant:
    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def generate_response(
        self,
        message: str,
        user_name: str = "User"
    ) -> str:

        prompt = f"""
{PORTFOLIO_CONTEXT}

Visitor name:
{user_name}

Visitor question:
{message}

Answer the visitor's question using only the portfolio information above.
"""

        response = self.client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=prompt
        )
        if not response.text:
            return (
                "I'm sorry, I couldn't generate a response right now."
            )

        return response.text.strip()



# Fallback responses when Gemini is unavailable
FALLBACK_RESPONSES = {
    "project": (
        "You can ask me about Subiksha's projects and "
        "the technologies used in them."
    ),
    "skills": (
        "Subiksha's technical skills include Python, FastAPI, "
        "Flask, Django REST Framework, React, TypeScript, "
        "PostgreSQL, MySQL, MongoDB, Docker, Azure, and AI/LLM technologies."
    ),
    "experience": (
        "You can ask me about Subiksha's professional experience, "
        "internships, and technical work."
    ),
}


class MockAIAssistant:
    """Fallback assistant that works without a Gemini API key."""

    def generate_response(
        self,
        message: str,
        user_name: str = "User"
    ) -> str:

        message_lower = message.lower()

        for key, response in FALLBACK_RESPONSES.items():
            if key in message_lower:
                return f"Hi {user_name}! {response}"

        return (
            f"Hi {user_name}! You can ask me about "
            "Subiksha's projects, skills, experience, "
            "research, or technologies."
        )


def get_ai_assistant():
    """
    Return Gemini AI assistant when a Gemini API key is available.
    """

    try:
        if settings.GEMINI_API_KEY:
            return AIAssistant()

    except Exception as e:
        print(f"Failed to initialize Gemini AI assistant: {e}")

    return MockAIAssistant()