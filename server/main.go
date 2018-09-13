package main

import (
	"net"
	"net/http"
	"time"

	"github.com/husobee/vestigo"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/mikerjacobi/amazon-merchant/server/controllers"
	rpc "github.com/mikerjacobi/grpc/pb"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func logMiddleware(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		f(w, r)
		logrus.Infof("%s: %dns", r.URL.String(), time.Now().Sub(start))
	}
}

func main() {
	crt, key := "localhost.crt", "localhost.key"
	tlsCreds, err := credentials.NewServerTLSFromFile(crt, key)
	if err != nil {
		logrus.Panicf("failed to create grpc tls server: %+v", err)
	}
	grpcServer := grpc.NewServer(grpc.Creds(tlsCreds))
	wrappedGrpc := grpcweb.WrapServer(grpcServer)

	rpc.RegisterCacheServer(grpcServer, controllers.NewCacheService())
	l, err := net.Listen("tcp", "0.0.0.0:5051")
	if err != nil {
		logrus.Panicf("failed to create grpc tls server: %+v", err)
	}

	router := vestigo.NewRouter()

	router.Get("/grpc", grpcHandler(wrappedGrpc), logMiddleware)
	router.SetGlobalCors(&vestigo.CorsAccessControl{
		AllowMethods: []string{"*"},
	})

	logrus.Infof("starting server")
	go func() {
		grpcServer.Serve(l)
	}()

	logrus.Fatal(http.ListenAndServeTLS("0.0.0.0:443", crt, key, router))
}

func grpcHandler(wrappedGrpc *grpcweb.WrappedGrpcServer) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		logrus.Infof("here")
		if wrappedGrpc.IsGrpcWebRequest(r) {
			wrappedGrpc.ServeHTTP(w, r)
		}
		http.DefaultServeMux.ServeHTTP(w, r)
	}
}
