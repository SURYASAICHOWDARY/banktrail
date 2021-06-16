const express = require("express");
const connectDB = require("./config/db");
var cors = require('cors')

const app = express();

//midleware 
app.use(express.json({ extended: true }));
app.use(cors());

//connecting mongoDB
connectDB();

app.get("/", (req, res) => res.send('hello world'));

//define routers
app.use('/customer', require("./routers/customer"));
app.use('/transactions', require("./routers/transactions"));



const PORT = process.env.PORT ||5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));