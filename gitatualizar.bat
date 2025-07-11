@echo off
cd /d %~dp0
git add .
git commit -m "Atualização automática do site Blue Box"
git push origin main