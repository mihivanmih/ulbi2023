cd ~/ulbi2023
npm run build: prod

rm -rf /var/www/ulbi2023/html/
mv ~/ulbi2023/build/ /var/www/ulbi2023/html/
