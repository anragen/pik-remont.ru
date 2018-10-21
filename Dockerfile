# docker build . -t my-php-app:1.0.0

FROM php:7.2-apache
RUN mkdir /app
COPY /app /var/www/html/
