const express = require('express')
const redis = require('redis')

const server = express()
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

const start = async () => {
    await client.connect();
};
start();
client.on('error', err => console.log('Redis client error', err));
client.on('ready', () => console.log('Redis client connected <3'));

client.set('inventoryCount', 0);
server.get('/api/get', (req, res) => {
    client.get('inventoryCount', (err, count) => {
        console.log('Inventory Count: ', count)
        count = parseInt(count) + 1;
        res.json(count);
        client.set('inventoryCount', count);
    });
});

server.listen(8080, () => {
    console.log('Inventory server listening on port 8080...');
});