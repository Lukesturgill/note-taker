const express = require('express');
const apiNotes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiNotes);
app.use('/', htmlRoutes);

//listen for server start command and console log
app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});