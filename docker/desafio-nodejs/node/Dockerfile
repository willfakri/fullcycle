#Dockerfile desenv não copia os arquivos do projeto pois podemos mapear o volume para os arquivos de projeto na máquina host.
FROM node

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

COPY package*.json ./
RUN npm install

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# CMD [ "node", "index.js" ]