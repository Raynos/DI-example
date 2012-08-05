var mongo = require("../mocks/mongo")
    , store = require("./store")(mongo)
    , assert = require("assert")

store.set("foo", "bar", function (err) {
    store.get("foo", function (err, value) {
        assert.equal(value, "bar")
        console.log("DONE")
    })
})