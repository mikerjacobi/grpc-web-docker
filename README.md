http://jacobra-pb.s3-website-us-west-2.amazonaws.com
http://jacobra-pb.s3-website-us-west-2.amazonaws.com/docs.html


client

from client dir:
this will produce output in client/generated, which is included when webpack is called
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:generated --ts_out=service=true:generated -I ../server/pb ../server/pb/app.proto
