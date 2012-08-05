var mongo = require("mongo-col")("DI constructor injection")
    , store = require("./store")

module.exports = store(mongo)