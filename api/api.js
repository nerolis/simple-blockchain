const express = require('express');

const router  = express.Router();

const BlockChain = require('../blockchain/BlockChain');

const neroCoin = new BlockChain();

const findBlock = (block, index) => block.index == index;

router.get('/', function (req, res) {
    res.send(neroCoin.chain);
});

router.get('/:id', function (req, res) {
    const index = req.params.id;

    const block = neroCoin.chain.filter(block => findBlock(block, index) ? block : null);

    res.send(block);
});

router.post('/', function (req, res) {

    const block = neroCoin.addBlock({
        sender      : req.body.sender, 
        receiver    : req.body.receiver,
        amount      : req.body.amount
    });

    res.send(block);
});

module.exports = router;
