docker run -p 80:80 -v /Users/divine1/codes/programs/noapp/nginx.conf:/etc/nginx/nginx.conf -v /Users/divine1/codes/programs/noapp/dist/appleapp:/usr/share/nginx/html -it nginx:latest


docker run -p 80:80 -v /Users/divine1/codes/programs/noapp/nginx.conf:/etc/nginx/nginx.conf -v /Users/divine1/codes/programs/noapp/dist:/usr/share/nginx/html -it nginx:latest