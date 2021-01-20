const db = require('../../db')

module.exports = {
    insertNewProfiles
}

function insertNewProfiles(profilesEdited) {
    let query = 'INSERT INTO Profiles ('

    console.log(query)
    db.queryAction(query)
}
