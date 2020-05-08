# docker run -it node:13-alpine /bin/bash
# ---- Base Node ----
FROM node:13-alpine AS base
# Preparing
RUN mkdir -p /var/app && chown -R node /var/app
# Set working directory
WORKDIR /var/app
# Copy project file
COPY package.json .
COPY package-lock.json .
COPY index.mjs .

ENV NODE_ENV=production
RUN apk add --update bash
RUN npm ci --only=prod --silent
EXPOSE 3003
CMD node --experimental-modules index.mjs