var db = require("db")

module.exports = {
    set: set
    , get: get
}

function set(key, value, callback) {
    db.update({
        key: key
    }, {
        $set: {
            value: value
        }
    }, {
        upsert: true
        , safe: true
    }, callback)
}

function get(key, callback) {
    db.findOne({
        key: key
    }, function (err, result) {
        callback(err, result && result.value)
    })
}