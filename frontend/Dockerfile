FROM node:10.16.3-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn

# Copy source files
COPY . .
