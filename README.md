import dump into your mysql database
cd api
npm install
in .env make changes according to your database settings
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=user
# DB_PASSWORD=root
# DB_NAME=sh
# PORT=8000 
type = "npm start"

cd .. "shift to main directory"
cd client 
make changes in mainsection.jsx , pastdrive.jsx ,application.jsx,notification.jsx,faq,jsx
change "mysql.server ..." to "localhost:8000" 
npm install
npm start


