
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/connection");
const rout = require("./routes/route");


const port = process.env.port || 4500

app.use(express.json());
app.use(cors());
app.use(rout);

app.listen(port, () => {
    console.log(`server is running -${port}`)
});
