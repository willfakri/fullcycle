FROM nginx:latest

# WORKDIR /app

RUN apt-get update && \
    apt-get install vim -y && \
    apt-get install iproute2 -y && \
    apt-get install iputils-ping -y

COPY /html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]