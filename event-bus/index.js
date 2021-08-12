const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());


app.post("/events", (req, res) => {
    const event = req.body;
    console.log(event);

    axios.post("http://localhost:4000/events", event).catch(err => console.log("Request failed."));
    axios.post("http://localhost:4001/events", event).catch(err => console.log("Request failed."));;
    axios.post("http://localhost:4002/events", event).catch(err => console.log("Request failed."));;

    res.send({status: "OK"});
});

app.listen(4005, () => {
    console.log("Listening on port 4005");
});