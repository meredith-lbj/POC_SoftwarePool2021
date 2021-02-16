import express from 'express';
const server = express();

server.get('/hello', (request, response) => {
    response.send('World');
});

server.listen(8080)
console.log('Server app listening on port 8080');