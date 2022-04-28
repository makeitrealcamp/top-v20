# Use small base imagen with nodejs 16
FROM node:16-alpine3.14

RUN mkdir -p /app

# set currrent work directory
WORKDIR /app

# copy files to current work directory
COPY ["package.json", "package-lock.json*", "./"]

# install dependencies
RUN npm install

# copy files to current work directory
COPY . .

# open default port
EXPOSE 8080

# run app
CMD [ "npm", "start" ]
