cd ~/ulbi2023
npm run build:prod apiUrl=https://mihivanmih.ru/api

rm -rf /var/www/ulbi2023/html/
mv ~/ulbi2023/build/ /var/www/ulbi2023/html/
