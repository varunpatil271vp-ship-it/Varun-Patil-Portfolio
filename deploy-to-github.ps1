# Deploy portfolio to GitHub (varunpatil271vp-ship-it)
# Run this in PowerShell after installing Git: https://git-scm.com/download/win

$ErrorActionPreference = "Stop"
$repoRoot = $PSScriptRoot

Set-Location $repoRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed. Install from: https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

Write-Host "Initializing git (if needed)..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) { git init }

Write-Host "Adding all files..." -ForegroundColor Cyan
git add .

Write-Host "Committing..." -ForegroundColor Cyan
git commit -m "Portfolio: Varun Narendra Patil - M.S. Mechanical Engineering"

Write-Host "Setting default branch to main..." -ForegroundColor Cyan
git branch -M main

# Remove existing origin if present (e.g. from a previous try)
git remote remove origin 2>$null

Write-Host "Connecting to GitHub (varunpatil271vp-ship-it/Varun-Patil-Portfolio)..." -ForegroundColor Cyan
git remote add origin https://github.com/varunpatil271vp-ship-it/Varun-Patil-Portfolio.git

Write-Host ""
Write-Host "Pushing to GitHub (you may be asked to sign in)..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "Done! Your repo: https://github.com/varunpatil271vp-ship-it/Varun-Patil-Portfolio" -ForegroundColor Green
