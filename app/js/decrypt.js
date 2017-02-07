var crypto = require('crypto');
var fs = require('fs');
var mcrypt = require('mcrypt');
var ursa = require('ursa');

var privateKeyFile = fs.readFileSync(process.cwd() + '/keys/test-key.pem');
var privateKey = ursa.createPrivateKey(privateKeyFile);

function decrypt(text)
{
    return privateKey.decrypt(text, 'base64', 'utf8');
}
