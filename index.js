const Blockchain = require('./Blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({name: 'victor', age: 30})
blockchain.addBlock({ name: 'godwin', age: 32 })

console.log(blockchain.blocks());