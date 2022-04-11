const express = require('express');
const apiNotes = require('Develop/public/assets/js/apiNotes.js');
const htmlPath = require('Develop/public/assets/js/htmlPath.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiNotes);
app.use('/', htmlPath);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});