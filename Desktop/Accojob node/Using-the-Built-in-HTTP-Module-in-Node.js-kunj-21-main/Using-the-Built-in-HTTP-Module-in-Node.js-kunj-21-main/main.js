


const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {

  fs.readFile(`${__dirname}/output.txt`, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Error reading the file: ${err.message}`);
      return;
    }

 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});


const PORT = 3000;


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
