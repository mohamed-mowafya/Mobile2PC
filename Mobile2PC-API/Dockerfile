# Use an official Node.js runtime as the base image
FROM node:14

# Create a working directory for your application
WORKDIR /app

# Copy your package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install application dependencies
RUN npm install

# Copy your application code into the container
COPY . .

# Expose the port that your application will run on
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]