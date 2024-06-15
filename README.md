import dump into your mysql database

cd api

npm install

in .env make changes according to your database settings

 DB_HOST=localhost \
 DB_PORT=3306 \
 DB_USER=user \
 DB_PASSWORD=root \
 DB_NAME=sh \
 PORT=8000 \

or \
DB_HOST=b4ig04vkmgd6lei5caqu-mysql.services.clever-cloud.com \
DB_PORT=3306  \
DB_USER=uo6tpg0rhyahursj \
DB_PASSWORD=PstaCkgAnYagCpuUsE3y \
DB_NAME=b4ig04vkmgd6lei5caqu \
PORT=8000 \

use  above default setting and just install client and start. nither follow below steps

npm start

cd .. "shift to main directory"

cd client 

make changes in mainsection.jsx , pastdrive.jsx ,application.jsx,notification.jsx,faq,jsx

change "mysql.server ..." to "localhost:8000" 

npm install

npm start


