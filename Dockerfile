# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY todolist.html /usr/share/nginx/html/index.html
COPY todolist.css /usr/share/nginx/html/
COPY todolist.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx will start automatically when the container starts 
