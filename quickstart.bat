@echo off
REM Quick Start Script for Portfolio (Windows)

echo.
echo 🚀 Subiksha's Developer Portfolio - Quick Start
echo ================================================
echo.

REM Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
echo ❌ Node.js not found. Install from https://nodejs.org/
exit /b 1
)

echo ✅ Node.js:
node --version
echo.

REM Check for Python
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
echo ❌ Python not found. Install from https://python.org/
exit /b 1
)

echo ✅ Python:
python --version
echo.

REM Backend setup
echo 📦 Setting up Backend...
cd backend

if not exist .env (
copy .env.example .env
)

if not exist venv (
echo Creating virtual environment...
python -m venv venv
)

echo Activating virtual environment...
call venv\Scripts\activate

echo Installing backend dependencies...
pip install -r requirements.txt

echo.
echo ✅ Backend ready!
echo.

cd ..

REM Frontend setup
echo 📦 Setting up Frontend...
cd frontend

echo Installing frontend dependencies...
call npm install

echo.
echo ✅ Frontend ready!
echo.

cd ..

echo 🎉 Setup complete!
echo.
echo Next steps:
echo   1. Make sure PostgreSQL is running.
echo   2. Configure backend.env
echo.
echo   3. Start the backend:
echo      cd backend
echo      venv\Scripts\activate
echo      uvicorn app.main:app --reload
echo.
echo   4. Start the frontend in another terminal:
echo      cd frontend
echo      npm run dev
echo.
echo   5. Open the frontend URL shown by Vite.
echo   6. API Docs: http://localhost:8000/docs
echo.
echo Happy coding! 🚀
