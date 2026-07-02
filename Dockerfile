FROM php:8.3-apache

# Copy all files into web root
COPY . /var/www/html

# Ensure index.php is served first
RUN echo "DirectoryIndex index.php index.html" > /etc/apache2/conf-available/dir.conf \
    && a2enconf dir

# Enable rewrite (safe for future MVC use)
RUN a2enmod rewrite

EXPOSE 80

CMD ["apache2-foreground"]