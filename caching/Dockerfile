FROM nginx

RUN mkdir -p /cache/cache/cas
RUN mkdir -p /cache/cache/ac

RUN chmod -R 777 /cache

CMD ["nginx", "-g", "daemon off;"]