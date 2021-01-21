const http = require('http');
const port = process.env.PORT || 4001;

const requestListener = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
}

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
