var store = module.exports = {
    set: set
    , get: get
    // imports
    , mongo: null
}
function set(key, value, callback) {
    store.mongo.update({
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
    store.mongo.findOne({
        key: key
    }, function (err, result) {
        callback(err, result && result.value)
    })
}