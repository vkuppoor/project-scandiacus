<<<<<<< HEAD
FROM node:16-alpine3.16 
=======
FROM node:16-alpine3.16
>>>>>>> 50fb664211902a85641a0665a795958185b7c35c

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

#################################################################################################

<<<<<<< HEAD
# FROM node:16-alpine3.16 
=======
# FROM node:16-alpine3.16
>>>>>>> 50fb664211902a85641a0665a795958185b7c35c
# # as development

# # ENV NODE_ENV development

# WORKDIR /app/frontend

# COPY ["package*.json","./"]

# # COPY package.json .

# # COPY yarn.lock .

# RUN yarn install

# # RUN npm install

# COPY . .

# EXPOSE 3000

# # CMD [ "npm", "start" ]

# CMD [ "yarn", "start" ]

#################################################################################################

# # Build Stage 1
# # This build created a staging docker image
# #
# FROM node:10.16-alpine3.16 AS appbuild
# WORKDIR /usr/src/app
# COPY package.json ./
# COPY .babelrc ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Build Stage 2
# # This build takes the production build from staging build
# #
# FROM node:10.16-alpine3.16
# WORKDIR /usr/src/app
# COPY package.json ./
# COPY .babelrc ./
# RUN npm install
# COPY --from=appbuild /usr/src/app /app/frontend
# EXPOSE 3000
# CMD npm start

#################################################################################################

# FROM node:16-alpine3.16 as builder

# # ENV NODE_ENV builder

# WORKDIR /opt/src/frontend

# COPY package.json .

# # COPY yarn.lock .

# # RUN yarn install

# RUN npm install

# EXPOSE 3000

# FROM alpine:3.16

# COPY --from=builder /opt/src/frontend /app/frontend

# CMD [ "npm", "start" ]
<<<<<<< HEAD

=======
>>>>>>> 50fb664211902a85641a0665a795958185b7c35c
