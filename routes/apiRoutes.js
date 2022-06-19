const router = require('express').Router();

const save = require('../db/save.js');

// Get existing notes

router.get('/notes', (req, res) => {
    save
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// Add a new note 

router.post('/notes', (req, res) => {
    console.log(req.body)
    save
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// Delete an existing note

router.delete('/notes/:id', (req, res) =>{
    save
        .removeNote(req.params.id)
        .then(() => res.json({ delete: true}))
        .catch(err => res.status(500).json(err))
}
);

module.exports = router;