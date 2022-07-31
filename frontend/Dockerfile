FROM node:16 as development

ENV NODE_ENV development

WORKDIR /app/frontend

COPY package.json .

COPY yarn.lock .

RUN yarn install

# RUN npm install

COPY . .

EXPOSE 3000

# CMD [ "npm", "start" ]

CMD [ "yarn", "start" ]