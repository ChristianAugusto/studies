rm -rf node_modules
npm install --only=dev
npm run build
rm -rf node_modules
npm install --production
npm start