const sha = require('js-sha256');

class Block {
    constructor(index, data, prevHash) {
        this.index     = index;
        this.data      = data;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.prevHash  = prevHash;
        this.hash      = this.getHash();
    }

    getHash() {
        return sha(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

module.exports = Block;