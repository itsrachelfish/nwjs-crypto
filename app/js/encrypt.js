var crypto = require('crypto');
var fs = require('fs');
var mcrypt = require('mcrypt');
var ursa = require('ursa');

var publicKeyFile = fs.readFileSync(process.cwd() + '/keys/test-key.pub');
var publicKey = ursa.createPublicKey(publicKeyFile);

function encrypt(text)
{
    return publicKey.encrypt(text, 'utf8', 'base64');
}
