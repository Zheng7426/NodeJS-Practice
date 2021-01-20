const http = require('http');

const hostname = '127.0.0.1';
const port = 4001;

const requestListener = (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');	
}

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
