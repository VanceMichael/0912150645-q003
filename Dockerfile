FROM node:22-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY src ./src
RUN npm test
EXPOSE 8080
CMD ["npm", "start"]
