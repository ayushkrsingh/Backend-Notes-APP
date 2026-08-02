const express = require('express');

const app = express();   // creating server instance

app.use(express.json());

const notes = [];

// POST /notes   ----

app.post('/notes', (req, res) => {
    console.log(req.body);

    notes.push(req.body);
    res.status(201).json({
        message: "Note created Successfully!"
    })
    
})

// GET /notes    -------

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

module.exports = app;