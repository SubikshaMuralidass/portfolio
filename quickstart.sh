#!/bin/bash

# Quick Start Script for Portfolio

echo "🚀 Subiksha's Developer Portfolio - Quick Start"
echo "================================================"
echo ""

# Check for required tools

echo "📋 Checking requirements..."

command -v node > /dev/null 2>&1 || {
echo "❌ Node.js not found. Install from https://nodejs.org/"
exit 1
}

command -v python > /dev/null 2>&1 || {
echo "❌ Python not found. Install from https://python.org/"
exit 1
}

echo "✅ Node.js: $(node --version)"
echo "✅ Python: $(python --version)"
echo ""

# Backend setup

echo "📦 Setting up Backend..."

cd backend || exit 1

[ -f .env ] || cp .env.example .env

if [ ! -d "venv" ]; then
echo "Creating virtual environment..."
python -m venv venv
fi

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing backend dependencies..."
pip install -r requirements.txt

echo ""
echo "✅ Backend ready!"
echo ""

cd .. || exit 1

# Frontend setup

echo "📦 Setting up Frontend..."

cd frontend || exit 1

echo "Installing frontend dependencies..."
npm install

echo ""
echo "✅ Frontend ready!"
echo ""

cd .. || exit 1

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Make sure PostgreSQL is running."
echo "  2. Configure backend/.env"
echo ""
echo "  3. Start the backend:"
echo "     cd backend"
echo "     source venv/bin/activate"
echo "     uvicorn app.main:app --reload"
echo ""
echo "  4. Start the frontend in another terminal:"
echo "     cd frontend"
echo "     npm run dev"
echo ""
echo "  5. Open the frontend URL shown by Vite."
echo "  6. API Docs: http://localhost:8000/docs"
echo ""
echo "Happy coding! 🚀"
