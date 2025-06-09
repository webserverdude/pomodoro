# Use a minimal Nginx image
FROM nginx:alpine

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the static files (HTML, JS, MP3, etc.) to the nginx web root
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY alarm.mp3 /usr/share/nginx/html/

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
