# nwjs-crypto
A simple test app using NW.js and node-mcrypt

1. Download NW.js files from https://nwjs.io
2. Copy NW.js files into the **nwjs/** folder
3. Run ./start.sh


## Other info
A public/private RSA keypair is included in the **app/keys/** folder. These files were generated using the following commands:

```
openssl genrsa -out test-key.pem 4096
openssl rsa -in test-key.pem -pubout > test-key.pub
```
