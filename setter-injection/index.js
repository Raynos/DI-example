var mongo = require("mongo-col")("DI setter injection")
    , store = require("./store")

store.mongo = mongo

module.exports = store