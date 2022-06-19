const path = require('path');

const router = require('express').Router();

//send notes to note.html tempelet
router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//send to homepage if issue occures
router.get('/', (req, res) => {
    red.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;