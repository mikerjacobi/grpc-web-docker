package controllers

import (
	"context"

	rpc "github.com/mikerjacobi/grpc/pb"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type CacheService struct {
	store map[string][]byte
}

func NewCacheService() *CacheService {
	return &CacheService{make(map[string][]byte)}
}

func (s *CacheService) Get(ctx context.Context, req *rpc.GetReq) (*rpc.GetResp, error) {
	val, ok := s.store[req.Key]
	if !ok {
		logrus.Infof("key %s not found", req.Key)
		return nil, status.Errorf(codes.NotFound, "Key not found %s", req.Key)
	}
	return &rpc.GetResp{Val: val}, nil
}
func (s *CacheService) Store(ctx context.Context, req *rpc.StoreReq) (*rpc.StoreResp,
	error) {
	s.store[req.Key] = req.Val
	return &rpc.StoreResp{}, nil
}
