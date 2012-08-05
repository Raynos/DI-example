module.exports = storeConstructor

function storeConstructor(mongo) {
    return {
        set: set
        , get: get
    }

    function set(key, value, callback) {
        mongo.update({
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
        mongo.findOne({
            key: key
        }, function (err, result) {
            callback(err, result && result.value)
        })
    }
}