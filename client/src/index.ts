import {grpc, Code, Metadata} from "grpc-web-client";
import {Cache} from "../generated/app_pb_service";
import {StoreReq, StoreResp, GetReq, GetResp} from "../generated/app_pb";

class CacheAPI {
    host: string;

    constructor() { 
        this.host = "https://52.3.225.206:8443"
    }
    setCache(){
        var key = document.getElementById("set_cache_key");
        var val = document.getElementById("set_cache_val");
        var req = new StoreReq();
        req.setKey((<HTMLInputElement>document.getElementById("set_cache_key")).value);
        req.setVal((<HTMLInputElement>document.getElementById("set_cache_val")).value);
        grpc.invoke(Cache.Store, {
            request: req,
            host: this.host,
            onMessage: (message: StoreResp) => {
                console.log("success store");
                console.log(StoreResp);
            },
            onEnd: (code: Code, msg: string | undefined, trailers: Metadata) => {
                if (code != Code.OK) {
                    console.log("failed store", code, msg, trailers);
                }
            }
        });
    }
    getCache(){
        var key = document.getElementById("get_cache_key");
        var req = new GetReq();
        req.setKey((<HTMLInputElement>document.getElementById("get_cache_key")).value);
        grpc.invoke(Cache.Get, {
            request: req,
            host: this.host,
            onMessage: (message: GetResp) => {
                console.log("success get");
                console.log(GetResp);
            },
            onEnd: (code: Code, msg: string | undefined, trailers: Metadata) => {
                if (code != Code.OK) {
                    console.log("failed get", code, msg, trailers);
                }
            }
        });
    }
};

var api = new CacheAPI();
let setCacheButton = document.getElementById('set_cache_btn')!;
let getCacheButton = document.getElementById('get_cache_btn')!;

setCacheButton.onclick = function(){
	api.setCache();
}
getCacheButton.onclick = function(){
    api.getCache();
}
