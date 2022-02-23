FROM node:16.9.1
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install

CMD ["yarn", "dev"]