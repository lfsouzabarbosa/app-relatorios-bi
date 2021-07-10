FROM node:alpine

WORKDIR /work/app-relatorios-bi

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]