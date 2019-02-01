const mongoose = require('mongoose');

class Database {
    constructor(addr = '127.0.0.1:27017', dbname){
        this.dbname = dbname;
        this.addr = addr;
    }

    connect(user, pass) {
        let creds = user && pass ? `${user}:${pass}@` : '';
        console.log(`mongodb://${creds}${this.addr}/${this.dbname}`);
        global.db = mongoose.createConnection(`mongodb://${creds}${this.addr}/${this.dbname}`, {useNewUrlParser: true}, err => {
            if (err) throw new Error('err');
            console.log(`successfully connected to db ${this.dbname}`);
        });

        //db.on('error', err => console.log(err));

        return db;
    }
}

module.exports = Database;