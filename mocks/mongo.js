module.exports = {
    findOne: findOne
    , update: update
    , _values: {}
}

function findOne(query, callback) {
    callback(null, this._values[query.key])
}

function update(findQuery, updateQuery, options, callback) {
    this._values[findQuery.key] = updateQuery.$set
    callback(null)
}