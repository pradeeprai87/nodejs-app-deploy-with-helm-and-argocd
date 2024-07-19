# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install --quite

# Expose the application port
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]
