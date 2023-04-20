# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /frontend

# Copy the package.json and package-lock.json files into the container
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the production-ready application
RUN npm run build

# Set environment variables for the server component
ENV REACT_APP_API_URL=http://server:3000/api

# Expose the port used by the application
EXPOSE 80

# Start the application when the container is started
CMD ["npm", "start"]
