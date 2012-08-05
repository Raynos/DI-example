// uses real database! naughty
var store = require("./index")
    , assert = require("assert")

store.set("foo", "bar", function (err) {
    store.get("foo", function (err, value) {
        assert.equal(value, "bar")
        console.log("DONE")
        // How do we close the database?
    })
})