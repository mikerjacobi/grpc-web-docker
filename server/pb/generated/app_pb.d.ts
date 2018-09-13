// package: rpc
// file: app.proto

import * as jspb from "google-protobuf";

export class StoreReq extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getVal(): Uint8Array | string;
  getVal_asU8(): Uint8Array;
  getVal_asB64(): string;
  setVal(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreReq.AsObject;
  static toObject(includeInstance: boolean, msg: StoreReq): StoreReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreReq;
  static deserializeBinaryFromReader(message: StoreReq, reader: jspb.BinaryReader): StoreReq;
}

export namespace StoreReq {
  export type AsObject = {
    key: string,
    val: Uint8Array | string,
  }
}

export class StoreResp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreResp.AsObject;
  static toObject(includeInstance: boolean, msg: StoreResp): StoreResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoreResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreResp;
  static deserializeBinaryFromReader(message: StoreResp, reader: jspb.BinaryReader): StoreResp;
}

export namespace StoreResp {
  export type AsObject = {
  }
}

export class GetReq extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetReq): GetReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReq;
  static deserializeBinaryFromReader(message: GetReq, reader: jspb.BinaryReader): GetReq;
}

export namespace GetReq {
  export type AsObject = {
    key: string,
  }
}

export class GetResp extends jspb.Message {
  getVal(): Uint8Array | string;
  getVal_asU8(): Uint8Array;
  getVal_asB64(): string;
  setVal(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResp.AsObject;
  static toObject(includeInstance: boolean, msg: GetResp): GetResp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResp;
  static deserializeBinaryFromReader(message: GetResp, reader: jspb.BinaryReader): GetResp;
}

export namespace GetResp {
  export type AsObject = {
    val: Uint8Array | string,
  }
}

