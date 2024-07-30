@echo off
echo Controleer of Docker Desktop actief is...
docker info >nul 2>&1
if errorlevel 1 (
    echo Docker Desktop is niet actief. Start Docker Desktop en probeer het opnieuw.
    pause
    exit /b
)
echo Docker Desktop is actief.

echo Navigeer naar de map met de uitgepakte bestanden...
cd /d %~dp0

echo Start de applicatie met Docker Compose...
docker compose up
pause
