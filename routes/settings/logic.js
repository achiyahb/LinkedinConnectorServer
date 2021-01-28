
const dataQueries = require('./data-queries');

module.exports = {
    setOperationSettings
}



async function setOperationSettings(settings) {
    dataQueries.insertIntoSettingsTable(settings)
}
