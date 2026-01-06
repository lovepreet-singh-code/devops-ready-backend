# 1. Base image
FROM node:18-alpine

# 2. App directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm installllll

# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 5000

# 7. Start server
CMD ["npm", "run", "dev"]
