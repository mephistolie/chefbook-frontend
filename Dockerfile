FROM node:alpine as builder

WORKDIR /app

COPY client/package.json /app/package.json
RUN npm install --only=prod

COPY /client /app
RUN PUBLIC_URL="." npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /client/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
