const express = require('express');
const router = express.Router();;

const Transaction = require('../model/transaction');
const Customer = require('../model/customer');




router.post('/', async (req, res)=>{

    const {sender, receiver, amount} = req.body;
    try {
        const Sender = await Customer.findOne({name: sender});
        const Receiver = await Customer.findOne({name: receiver});
        
        var receiverBalance = Receiver.Balance;
        var senderBalance = Sender.Balance;
       
        if(senderBalance >= amount){
            senderBalance -= amount;
            receiverBalance += amount;
           const newTransaction = new Transaction({
               sender, receiver, amount
           });
           const transaction = await newTransaction.save();
           Receiver.Balance = receiverBalance;
           Sender.Balance = senderBalance;
           await Sender.save();
           await Receiver.save();
            res.send(transaction);
        }else {
            res.send("insufficent funds");
        }
        

    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error"+ error.message);
    }
});

router.get("/history", async (req,res)=>{

    try {
        const transactions = await Transaction.find();
        res.send(transactions);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server error"+ error.message);
    }
});


module.exports = router;