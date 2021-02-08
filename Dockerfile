FROM node:14.15.2-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD ["yarn", "start"]