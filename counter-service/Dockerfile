FROM node:18-alpine AS build

# Source code with node_modules
WORKDIR /app
COPY . .
RUN yarn
#RUN yarn build

# Environment vars from docker compose
ARG mongo_url
ARG port
ARG debug

EXPOSE ${port}

CMD ["yarn", "start"]

#--------------------------------------------------
#FROM nginx:1.18-alpine AS deploy
#
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=build /app/dist .
#    #issue here
#
## 1. remove default nginx configuration file
## 2. replace with custom one
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx/ngnix.conf /etc/nginx/conf.d
#
#EXPOSE 4000
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
