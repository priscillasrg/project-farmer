
const express = require('express');
const router = express.Router();

const { Pool, Client} = require('pg')
const connectionString = 'postgresql://postgres:1234@localhost:5432/farmerDB'

const client = new Client ({
    connectionString:connectionString
})

client.connect()

client.query ('SELECT * from farmer', (err, res) => {
console.log(err,res)
client.end()
})


router.get('/', function (req, res, next) {
    res.status(200).send({
        document: '',
        name: '',
        address: '',
        state: '',
        city: '',
        country: '',
    });
});

module.exports = router;
