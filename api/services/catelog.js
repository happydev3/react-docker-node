const fs = require('fs');
const path = require('path');

module.exports = {
    getPhones: async () => {
        try {
            let rawdata = fs.readFileSync(path.resolve(__dirname, '../db/database.json'));
            let catalogs = JSON.parse(rawdata);
            return catalogs;
        } catch (err) {
            return err;
        }
    }
}