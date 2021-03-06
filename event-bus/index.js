const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const events = [];


app.post("/events", (req, res) => {
    const event = req.body;
    console.log(event);

    events.push(event);

    axios.post("http://localhost:4000/events", event).catch(err => console.log("Request failed."));
    axios.post("http://localhost:4001/events", event).catch(err => console.log("Request failed."));
    axios.post("http://localhost:4002/events", event).catch(err => console.log("Request failed."));
    axios.post("http://localhost:4003/events", event).catch(err => console.log("Request failed."));;

    res.send({status: "OK"});
});

app.get("/events", (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log("Event bus listening on port 4005");
});