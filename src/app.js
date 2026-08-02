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

// DELETE /notes:index

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    console.log(index);
    delete notes[index];
    res.status(200).json({
        message: "Note deleted Successfully"
    })
})

// PATCH /notes/:index  ------

app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const desc = req.body.description;
    notes[index].description = desc;
    console.log(desc);
    res.status(200).json({
        message: "Description updated successfully"
    })
    
})



module.exports = app;