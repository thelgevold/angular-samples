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

RUN ln -s /usr/bin/nodejs /usr/local/bin/node

WORKDIR /usr

RUN git clone https://github.com/thelgevold/bazel-buildfarm

COPY package.json /usr/bazel-buildfarm

WORKDIR /usr/bazel-buildfarm

RUN git pull

RUN npm install

ENTRYPOINT [ ]