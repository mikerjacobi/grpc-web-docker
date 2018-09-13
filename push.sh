rm server/amazon-merchant
CGO_ENABLED=0 GOOS=linux go build -o server/amazon-merchant -a -installsuffix cgo server/main.go
docker build -t mikerjacobi/amazon-merchant:latest .
docker push mikerjacobi/amazon-merchant
