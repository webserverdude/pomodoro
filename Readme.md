# 🕒 Pomodoro Timer

A simple dark-mode Pomodoro clock built with HTML, JavaScript, and Bootstrap. Runs inside a lightweight `nginx:alpine` Docker container.

---

## 🚀 Features

- ⏲️ 25-minute timer with Start / Pause / Reset buttons
- 🌙 Dark mode UI using Bootstrap 5
- 🔊 Plays a sound when time is up
- 🐳 Dockerized with NGINX for easy deployment
- ⚡ GitHub Actions CI for automatic image builds

---

## 🛠️ Project Structure

*  index.html # UI (Dark Mode + Bootstrap)
*  script.js # Timer logic (start, pause, reset, sound)
*  alarm.mp3 # Alarm sound (optional, must be in same dir)
*  Dockerfile # nginx:alpine container setup
*  .github/
*  workflows/
*  docker-build.yml # GitHub Actions CI
