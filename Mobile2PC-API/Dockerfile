FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

# Change localhost to local ip address, so website can be accessible from phones on the same network.
ENV FRONT_URL=http://localhost:8080
ENV PORT=8000

CMD ["npm", "start"]