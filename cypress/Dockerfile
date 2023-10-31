FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
WORKDIR /app
RUN npm install cypress
#RUN npm install -g wait-on
#COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait
COPY package.json /app/
COPY package-lock.json /app/
COPY cypress.config.js /app/
COPY cypress /app/cypress
RUN npx cypress verify
