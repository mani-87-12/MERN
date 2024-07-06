# FROM node:20
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# #copy my code
# COPY . .
# #run the app
# RUN npm run build
# #Nginx imgae to server our application
# FROM ngnix:alpine

# COPY --from=0/app/build/usr/share/ngnix

# EXPOSE 80

# #cmd to run our engine
# CMD ["ngnix","-g","daemon off";]

FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install
# copy my code 
COPY . .
# run the app
RUN npm run build
#Nginx  image to server our app
FROM nginx:alpine
#alpine
COPY --from=0 /app/build /usr/share/nginx

EXPOSE 80

#cmd to run our engine 
CMD ["nginx", "-g", "daemon off;"]