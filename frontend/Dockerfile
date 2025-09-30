FROM node:20-alpine

WORKDIR /app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Exponse the port vite
EXPOSE 5173

# Default commands
CMD ["npm", "run", "dev"]