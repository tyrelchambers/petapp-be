FROM node:15

WORKDIR /code

RUN mkdir -p /node_modules && chown -R node:node /node_modules
COPY --chown=node:node . .

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y build-essential
RUN apt-get install -y python

COPY package*.json ./

RUN npm install

RUN npm install -g sequelize-cli
RUN npm install -g nodemon

COPY . .

EXPOSE 4000

CMD npm run prod