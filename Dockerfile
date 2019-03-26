# 1 Step - building static html of react app
FROM node:latest as builder

WORKDIR /app

# By copying just package.json we can be sure that the cache is invalidated
# only when our package contents have changed.
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# Installing application dependencies
RUN npm install
# Building app
COPY . /app
RUN npm run build

# 2 Step building nginx image based on react app
FROM nginx:alpine

# Removing default static html
RUN rm -rf /usr/share/nginx/html/*
# Copying built static html to nginx image
COPY --from=builder /app/build /usr/share/nginx/html

# Creating nginx configuration file
COPY --from=builder /app/fenginx.conf /etc/nginx/conf.d/

# Exposing nginx port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]







