# Use Node.js 16 as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only the backend folder contents
COPY . ./

# Command to run the app
CMD ["node", "app.js"]

# Expose port 3000 (backend API port)
EXPOSE 3000
