<h1 align="center">Subiksha's Portfolio Web App</h1>

<p align="center">
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love">
  </a>
</p>

<p align="center">
   <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python">
   <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
   <img src="https://img.shields.io/badge/Azure-0078D4?logo=microsoftazure&logoColor=white" alt="Azure">
   <img src="https://img.shields.io/badge/License-Not%20specified-lightgrey" alt="License not specified">
</p>

[Visit the portfolio website](https://example.com)

A full-stack developer portfolio showcasing my backend development, AI integration, projects, achievements, and technical skills.

## 🎯 Features of portfolio

- Responsive portfolio website
- Categorized technical skills
- Project showcase with Recruiter Mode and Developer Mode
- AI-powered portfolio assistant
- Dark theme
- Backend API integration
- Persistent chat history
- API monitoring and metrics

## 🛠 Built with

### Frontend
- React 18
- Vite
- Tailwind CSS
- Lucide React
- Axios

### Backend
- Python
- FastAPI
- SQLAlchemy
- PostgreSQL

### AI
- Google Gemini API
- LLM integration

### Cloud and Tools
- Azure
- GIT

## 🤖 AI Assistant
The portfolio includes an AI assistant that allows visitors to ask questions about my:

- Skills
- Projects
- Experience
- Education

The assistant uses the information provided by my portfolio as its knowledge source.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Python 3.9+
- PostgreSQL 12+

### Setup Instructions

#### Backend Setup

1. **Create virtual environment**
   ```bash
   cd backend
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Setup PostgreSQL**
   ```bash
   # Create database
   createdb portfolio_db
   
   # Update .env with database URL
   cp .env.example .env
   ```

4. **Run database migrations**
   ```bash
   # (Migrations are auto-created on app startup)
   python app/main.py
   ```

5. **Start FastAPI server**
   ```bash
   uvicorn app.main:app --reload
   ```

#### Frontend Setup

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

