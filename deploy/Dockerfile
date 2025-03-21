FROM nginx:stable
ARG FRONT_DOMAIN
ARG BACKEND_DOMAIN
ARG PROXY_TO_BACKEND
ARG BRANCH=master
RUN rm -rf /www && mkdir /www
ADD ["./","/www/"]
RUN chown -R nginx:nginx /www
RUN rm -rf /etc/nginx/conf.d/* && rm /etc/nginx/nginx.conf && rm -rf /www/deploy /www/.github
ADD ["./deploy/nginx.conf","/etc/nginx/nginx.conf"]
ADD ["./deploy/backend.conf", "/etc/nginx/conf.d/backend.conf"]
ADD ["./deploy/front.conf", "/etc/nginx/conf.d/front.conf"]
RUN sed -i "s/FRONT_DOMAIN/${FRONT_DOMAIN}/g" /etc/nginx/conf.d/front.conf
RUN sed -i "s/BACKEND_DOMAIN/${BACKEND_DOMAIN}/g" /etc/nginx/conf.d/backend.conf
RUN sed -i "s/PROXY_TO_BACKEND/${PROXY_TO_BACKEND}/g" /etc/nginx/conf.d/backend.conf
CMD ["nginx","-g","daemon off;"]
EXPOSE 80/tcp
ENTRYPOINT ["/docker-entrypoint.sh"]
