@echo off
title Push Liptis Nutrition App to GitHub
echo ============================================================
echo   Liptis Nutrition Brussels & Ghent Standalone 2026
echo   Push Local Repository to GitHub
echo ============================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/username/repo.git): "
if "%REPO_URL%"=="" (
    echo [ERROR] No URL entered. Exiting.
    pause
    exit /b
)
echo.
echo [1/3] Adding Remote Origin...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [2/3] Setting Main Branch...
git branch -M main

echo [3/3] Pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ============================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo ============================================================
    echo   Next step to make it live:
    echo   1. Go to your GitHub repository in your browser
    echo   2. Click 'Settings' -> 'Pages'
    echo   3. Under Branch select 'main' / '(root)' and click Save
    echo ============================================================
) else (
    echo.
    echo [NOTICE] If prompted, please sign in to GitHub in the popup window.
)
echo.
pause
