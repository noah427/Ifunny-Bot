require("dotenv").config()
const { Client } = require('klasa');

new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: 'ifunny ',
    cmdEditing: true,
    typing: true,
}).login(process.env.TOKEN);
