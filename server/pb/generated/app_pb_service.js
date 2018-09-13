// package: rpc
// file: app.proto

var app_pb = require("./app_pb");
var grpc = require("grpc-web-client").grpc;

var Cache = (function () {
  function Cache() {}
  Cache.serviceName = "rpc.Cache";
  return Cache;
}());

Cache.Store = {
  methodName: "Store",
  service: Cache,
  requestStream: false,
  responseStream: false,
  requestType: app_pb.StoreReq,
  responseType: app_pb.StoreResp
};

Cache.Get = {
  methodName: "Get",
  service: Cache,
  requestStream: false,
  responseStream: false,
  requestType: app_pb.GetReq,
  responseType: app_pb.GetResp
};

exports.Cache = Cache;

function CacheClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CacheClient.prototype.store = function store(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Cache.Store, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

CacheClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Cache.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.CacheClient = CacheClient;

