const mongoose = require('mongoose');

class Database {
    constructor(addr = '127.0.0.1:27017', dbname){
        this.dbname = dbname;
        this.addr = addr;
    }

    connect(user, pass) {
        return new Promise((res,rej) => {
            let creds = user && pass ? `${user}:${pass}@` : '';
            let db = mongoose.connection;
            
            db.once('open', () => console.log(`db '${this.dbname}' connected successfull`));

            mongoose.connect(`mongodb://${creds}${this.addr}/${this.dbname}`,{ useNewUrlParser: true })
                .then(()=>{
                    db.on('error', console.error.bind(console, 'connection error:'));
                    res();
                },err => rej(err));
        })
    }
}

module.exports = Database;