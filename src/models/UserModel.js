const connection = require('./database/connection');

async export default function create(data){
    await connection('users').insert({
        data,
    });
}

module.exports = create;