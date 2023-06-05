const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Serve static files (such as your HTML, CSS, and client-side JavaScript)
app.use(express.static('public'));

// Signaling server logic goes here...

// Listen for incoming connections
server.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
