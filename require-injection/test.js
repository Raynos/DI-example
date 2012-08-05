var mongo = require("../mocks/mongo")
    , SandboxedModule = require("sandboxed-module")
    , store = SandboxedModule.require("./store", {
        requires: {
            db: mongo
        }
    })
    , assert = require("assert")

store.set("foo", "bar", function (err) {
    store.get("foo", function (err, value) {
        assert.equal(value, "bar")
        console.log("DONE")
    })
})