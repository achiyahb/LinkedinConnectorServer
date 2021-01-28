const db = require('../../db')

module.exports = {
    insertIntoSettingsTable
}

function insertIntoSettingsTable(settings) {
    let query = 'INSERT INTO settings ('
    for (const prop in settings) {
        query += prop + ','
    }
    query += ') VALUES ('
        for (const [prop, value] of Object.entries(settings)) {
            if (value) {
                query += "'" + value + "'"
            } else {
                query += 'null'
            }
            query += ','
        }
        query += 'NOW())'
    console.log(query)
    db.queryAction(query)
}
