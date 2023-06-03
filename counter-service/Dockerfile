FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn
#RUN yarn build

EXPOSE 4001

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
