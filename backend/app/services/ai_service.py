from google import genai
from app.config import settings
import time


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
6. Do not claim that Subiksha has experience with something unless it is explicitly listed below.

RESPONSE STYLE:
- Use Markdown when appropriate.
- Use headings for multiple projects.
- Use numbered lists when listing projects.
- Use bullet points for technologies.
- Keep answers concise and easy to scan.
- Do not return one large paragraph.
- Use bold text for important information.

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
Docker, Azure, LLMs, AI, APIs, Git.

Portfolio Technology:

Frontend:
React 18, TypeScript, Vite, Tailwind CSS, Axios,
Lucide React.

Backend:
Python, FastAPI, SQLAlchemy, PostgreSQL, Pydantic.

AI:
LLMs, Gemini AI API, AI integration.

Deployment:
Docker, Docker Compose, Azure.

PROJECTS:

1. Portfolio Website:
   - A personal portfolio website showcasing Subiksha's skills,
     projects, and experience.
   - Built with React, TypeScript, Tailwind CSS, Python,
     FastAPI, Gemini AI API, PostgreSQL and deployed on Azure.

2. AI Chat Assistant:
   - An AI-powered chat assistant integrated into the portfolio.

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

RESEARCH:

No detailed research information is provided in this context.
If asked about specific research details, say:
"I don't have that information about Subiksha."

FREELANCING:

No detailed freelancing-service information is provided in this context.
If asked about specific freelancing services, say:
"I don't have that information about Subiksha."
"""


# Fallback responses when Gemini is unavailable
FALLBACK_RESPONSES = {
    "project": (
        "Hi {user_name}! You can ask me about Subiksha's "
        "projects and the technologies used in them."
    ),
    "skill": (
        "Hi {user_name}! Subiksha's technical skills include "
        "Python, C, FastAPI, Flask, Django REST Framework, "
        "React, TypeScript, PostgreSQL, MySQL, MongoDB, "
        "Docker, Azure, and AI/LLM technologies."
    ),
    "experience": (
        "Hi {user_name}! Subiksha has internship experience "
        "at Aisa-X / Vinsights Solutions from January 2026 "
        "to April 2026, with exposure to LLMs, RAG, AI voice "
        "calling systems, and Supabase."
    ),
    "education": (
        "Hi {user_name}! Subiksha completed a B.E. in Computer "
        "Science and Engineering from Anna University under "
        "Regulation 2021, with a CGPA of 7.9/10."
    ),
    "research": (
        "Hi {user_name}! I don't have detailed research "
        "information about Subiksha in my portfolio data."
    ),
    "technology": (
        "Hi {user_name}! You can ask me about the technologies "
        "used in Subiksha's portfolio, projects, or AI work."
    ),
}


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

Answer the visitor's question using ONLY the portfolio
information provided above.

Do not make assumptions or invent information.

If the information is not available, say:
"I don't have that information about Subiksha."

Remember:
- Be concise.
- Be professional and friendly.
- Use Markdown when useful.
"""

        # Retry temporary Gemini failures.
        # This helps with temporary 503/high-demand errors.
        max_retries = 2

        for attempt in range(max_retries + 1):
            try:
                response = self.client.models.generate_content(
                    model=settings.GEMINI_MODEL,
                    contents=prompt
                )

                if response.text:
                    return response.text.strip()

                return (
                    "I'm sorry, I couldn't generate a response "
                    "right now. Please try again."
                )

            except Exception as e:
                error_message = str(e)

                print(
                    f"Gemini request failed "
                    f"(attempt {attempt + 1}/{max_retries + 1}): "
                    f"{error_message}"
                )

                # Retry only for temporary/unavailable errors.
                is_temporary_error = (
                    "503" in error_message
                    or "UNAVAILABLE" in error_message.upper()
                    or "429" in error_message
                    or "RESOURCE_EXHAUSTED" in error_message.upper()
                )

                if not is_temporary_error:
                    break

                if attempt < max_retries:
                    # Wait 2 seconds, then 4 seconds.
                    wait_time = 2 ** (attempt + 1)

                    print(
                        f"Temporary Gemini error. "
                        f"Retrying in {wait_time} seconds..."
                    )

                    time.sleep(wait_time)

        # Gemini failed after retries.
        return self._fallback_response(
            message=message,
            user_name=user_name
        )

    @staticmethod
    def _fallback_response(
        message: str,
        user_name: str
    ) -> str:

        message_lower = message.lower()

        # Check more specific keywords first.
        keyword_groups = [
            (
                ["experience", "internship", "intern"],
                FALLBACK_RESPONSES["experience"]
            ),
            (
                ["education", "degree", "college", "cgpa", "study"],
                FALLBACK_RESPONSES["education"]
            ),
            (
                ["research", "paper", "publication"],
                FALLBACK_RESPONSES["research"]
            ),
            (
                ["skill", "skills"],
                FALLBACK_RESPONSES["skill"]
            ),
            (
                ["project", "projects"],
                FALLBACK_RESPONSES["project"]
            ),
            (
                ["technology", "technologies", "tech stack"],
                FALLBACK_RESPONSES["technology"]
            ),
        ]

        for keywords, response in keyword_groups:
            if any(keyword in message_lower for keyword in keywords):
                return response.format(user_name=user_name)

        return (
            f"Hi {user_name}! You can ask me about "
            "Subiksha's projects, skills, experience, "
            "education, research, or technologies."
        )


class MockAIAssistant:
    """
    Fallback assistant used when a Gemini API key is not available.
    """

    def generate_response(
        self,
        message: str,
        user_name: str = "User"
    ) -> str:

        return AIAssistant._fallback_response(
            message=message,
            user_name=user_name
        )


def get_ai_assistant():
    """
    Return Gemini AI assistant when a Gemini API key is available.
    Otherwise return the local fallback assistant.
    """

    try:
        if settings.GEMINI_API_KEY:
            return AIAssistant()

    except Exception as e:
        print(
            f"Failed to initialize Gemini AI assistant: {e}"
        )

    return MockAIAssistant()
