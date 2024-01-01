FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

ENV FRONT_URL=http://localhost:8080
ENV PORT=8000

CMD ["npm", "start"]