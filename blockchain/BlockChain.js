const Block = require('./Block');

class BlockChain {
    constructor() {
        this.chain = [];
    }

    addBlock(data) {
        const index = this.chain.length;
        const prevHash = index ? this.chain[index - 1].hash : 0;

        this.chain.push(new Block(index, data, prevHash));

        return new Block(index, data, prevHash);
    }
    
    chainIsValid() {
        for (let i = 0; i < this.chain.length; i++) {

            if(this.chain[i].hash !== this.chain[i].getHash()) {
                return false;
            }

            if(i > 0 && this.chain[i].prevHash !== this.chain[i-1].getHash) {
                return false;
            }

            return true;
        }
    }
}

module.exports = BlockChain;