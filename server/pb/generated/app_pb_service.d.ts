// package: rpc
// file: app.proto

import * as app_pb from "./app_pb";
import {grpc} from "grpc-web-client";

type CacheStore = {
  readonly methodName: string;
  readonly service: typeof Cache;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_pb.StoreReq;
  readonly responseType: typeof app_pb.StoreResp;
};

type CacheGet = {
  readonly methodName: string;
  readonly service: typeof Cache;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_pb.GetReq;
  readonly responseType: typeof app_pb.GetResp;
};

export class Cache {
  static readonly serviceName: string;
  static readonly Store: CacheStore;
  static readonly Get: CacheGet;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class CacheClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  store(
    requestMessage: app_pb.StoreReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: app_pb.StoreResp|null) => void
  ): void;
  store(
    requestMessage: app_pb.StoreReq,
    callback: (error: ServiceError, responseMessage: app_pb.StoreResp|null) => void
  ): void;
  get(
    requestMessage: app_pb.GetReq,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: app_pb.GetResp|null) => void
  ): void;
  get(
    requestMessage: app_pb.GetReq,
    callback: (error: ServiceError, responseMessage: app_pb.GetResp|null) => void
  ): void;
}

