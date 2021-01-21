const { Pool } = require('pg');
let pool
if(process.env.DATABASE_URL){
    console.log(process.env.DATABASE_URL)
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    console.log('local-server')
    pool = new Pool({
        "host": "localhost",
        "port": "5432",
        "user": "postgres",
        "password" : "test123",
        "database" : "postgres",
        "max" : 20,
        "connectionTimeoutMillis" : 2000,
        "idleTimeoutMillis" : 30000
    });
}



pool.connect();
function queryAction(query){
    try{
        pool.query(query, (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
        });
    } catch (e){
        console.log(e)
    }

}

module.exports = {
    queryAction
}




