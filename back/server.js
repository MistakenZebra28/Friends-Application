const expressServer = require('express');
const bparser = require('body-parser');
const server = expressServer();

server.use(bparser.json())

const friends = {
    friendsList: [
        { name: 'Someone Important', relation: 'bff', note: 'meeting next monday' },
        { name: 'John Wick', relation: 'cf', note: 'pending to send email about an assignment' },
        { name: 'Mark Ruffalo', relation: 'bf', note: 'stay away when he is angry' },
        { name: 'Scooby Doo', relation: 'mf', note: 'need to ask shaggy scooby\'s favourite snack' },
        { name: 'Cruella', relation: 'bf', note: 'need to get some dressing tips on the next meet' },
    ]
}

server.get('/', (req, res) => {
    // res.setHeader("Content-Type", "application/json");
    res.send(friends);
})

server.post('/', (req, res) => {
    friends.friendsList.push(req.body)
    res.send();
})

server.listen('8001', () => {
    console.log("Listening on 8001");
})