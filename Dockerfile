#FROM scratch
FROM debian

ADD server/pb/app.swagger.json /swagger.json
ADD server/amazon-merchant /app
ADD server/localhost.crt /localhost.crt
ADD server/localhost.key /localhost.key
ENTRYPOINT ["/app"]
