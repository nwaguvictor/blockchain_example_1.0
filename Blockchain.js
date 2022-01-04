const Block = require('./Block');
const generateHash = require('./hash');

module.exports = class Blockchain {
  constructor() {
    this.chain = [];
    const genesisBlock = new Block('0000', '0000', 'xxxx');
    this.chain.push(genesisBlock);
  }

  addBlock(data) {
    const lastHash = this.chain[this.chain.length - 1].hash;
    const hash = generateHash(data);
    const block = new Block(data, hash, lastHash);
    this.chain.push(block)
  }

  blocks() {
    return this.chain;
  }
}