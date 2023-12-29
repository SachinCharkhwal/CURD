const express = require("express");
const rout = express.Router();
const mySchema = require("../schema/schemaformat");

rout.get("/", (req, res) => {
    res.send("show  home page");
});

rout.get("/about", (req, res) => {
    res.send("show me about page")
});

rout.get("/alldata", async (req, res) => {
    const myData = await mySchema.find();
    res.json(myData);
    console.log(myData);
});


//post-create api...............................................................................................
rout.post("/create", async (req, res) => {
    const { fullName, email, phone, gender, city, pass, myPic } = req.body;
    const addUser = new mySchema({
        fullName, email, phone, gender, city, pass, myPic
    });
    await addUser.save();
    res.status(200).json(addUser);
    console.log(addUser);
});

//single data api.................................................................................................
// rout.get("/singledata/:id", async (req, res) => {
//     const { id } = req.params
//     const myData = await mySchema.findById({ _id: id });
//     res.json(myData);
//     console.log(myData);
// });

rout.get("/singledata/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const myData = await mySchema.findById(id);
        if (!myData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(myData);
        console.log(myData);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

//delete api.................................................................................................
rout.delete("/deleterecord/:id", async (req, res) => {
    const { id } = req.params;
    const a = await mySchema.findByIdAndDelete({ _id: id })
    console.log(a);
    res.status(201).json(a);
});


// update api.................................................................................................
rout.patch("/updateuser/:id", async (req, res) => {
    const { id } = req.params;
    const recordUpdate = await mySchema.findByIdAndUpdate(id, req.body, { new: true });
    console.log(recordUpdate);
    res.status(201).json(recordUpdate);
});


//login api.................................................................................................
rout.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.status(422).json({ error: "user email and password do not matched" });

    }
    else {
        const userValidation = await mySchema.findOne({ email: email });
        console.log(userValidation);
        if (userValidation.email === email && userValidation.pass === pass) {
            res.status(200).json({ message: 'welcome to login', status: 201 });
        }
        else {
            res.status(250).json({ error: "password not match" });
        }
    }
});

module.exports = rout;
