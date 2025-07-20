const requestListener = require('./routes.js');

require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT;
const HOST = process.env.HOST

// const requestListener = (req,res) => {
//   res.writeHead(200);
//   res.end('Hello world!\n');
// };

const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});