FROM ubuntu:latest

COPY package.json /usr
COPY tsconfig.json /usr
COPY webpack-no-lazy-loading.js /usr

RUN apt-get update
RUN apt-get -y install openjdk-8-jdk
RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN apt-get -y install git

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

WORKDIR /usr

RUN npm install

CMD [ "npm", "start" ]