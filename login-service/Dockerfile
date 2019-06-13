FROM openjdk:8-jre-alpine

WORKDIR /usr/app

COPY target/login-service-*-exec.jar ./

EXPOSE 3001
CMD java -jar *.jar