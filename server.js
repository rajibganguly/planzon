//Install express server
const express = require('express');
const path = require('path');

const app = express();

console.log('check port=', process.env.PORT);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/w3evideo'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/w3evideo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);