FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build



# Step 2. Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app
COPY --from=builder /app/ .

ARG port
ARG NEXT_PUBLIC_counter_service_url
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


#--------------help to build & run docker container--------------
# 1. Build the Docker image
# 2. Run the Docker container

#docker build -t counter-web-tag .
#docker run -p 4000:4000 counter-web-tag
