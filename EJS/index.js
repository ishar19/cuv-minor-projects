const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, images) from the "public" directory
app.use(express.static('public'));

// Define the route to render the EJS template
app.get('/', (req, res) => {
    const whyUsData = [
        'Tutorials by industry experts',
        'Peer & expert code review',
        'Coding exercises',
        'Access to our GitHub repos',
        'Community forum',
        'Flashcard decks',
        'New videos every week'
    ];
    res.render('template', { whyUsData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
