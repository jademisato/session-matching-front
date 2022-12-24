From node:18
WORKDIR user/src/app
COPY . .
RUN npm install --production
RUN npm run build
CMD [ "npm", "start"]
