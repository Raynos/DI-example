var mongo = require("mongo-col")("DI require injection")
    , SandboxedModule = require("sandboxed-module")
    , store = SandboxedModule.require("./store", {
        requires: {
            db: mongo
        }
    })

module.exports = store