FROM ubuntu:latest

RUN apt-get update
RUN apt-get -y install openjdk-8-jdk
RUN apt-get -y install curl
RUN apt-get -y install gnupg
RUN apt-get -y install git
RUN echo "deb [arch=amd64] http://storage.googleapis.com/bazel-apt stable jdk1.8" | tee /etc/apt/sources.list.d/bazel.list
RUN curl https://bazel.build/bazel-release.pub.gpg | apt-key add -
RUN apt-get update && apt-get -y install bazel
RUN apt-get upgrade -y bazel

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get -y install nodejs

WORKDIR /usr

RUN mkdir tools

COPY package.json /usr
COPY WORKSPACE /usr
COPY BUILD.bazel /usr
COPY tsconfig.json /usr
COPY angular.tsconfig.json /usr
COPY tools/bazel.rc /usr/tools/bazel.rc

RUN npm install
RUN npm run angular-compile

CMD [ "npm", "run", "bazel-run" ]