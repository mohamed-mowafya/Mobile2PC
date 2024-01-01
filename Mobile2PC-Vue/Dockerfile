FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV VITE_API_ENDPOINT_URL=http://localhost:8000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]