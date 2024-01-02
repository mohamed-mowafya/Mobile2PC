FROM node:lts-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

# Change localhost to local ip address, so website can be accessible from phones on the same network.
ENV VITE_API_ENDPOINT_URL=http://localhost:8000 
ENV VITE_FRONT_URL=http://localhost:8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]