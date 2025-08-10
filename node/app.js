// Import the Node.js built-in http module
//the 'http' is comming from the preinstalled node
const http = require('http');

// Define the port the server will listen on
// const hostname = '127.0.0.1'; // localhost
const port = 8000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with a status code of 200 (OK)
    // and a content type of plain textconst
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');

    // Send the "Hello!" string as the response body
    res.end("Hello Our First Node.js App 😁")
});

// Start the server and listen for incoming requests
server.listen(port, () => {
    // Log a message to the console to confirm the server is running
    console.log(`Server running at http://localhost:${port}/`);
});

