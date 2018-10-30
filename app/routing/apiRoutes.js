var patrons = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(patrons);
    });

    app.post("/api/friends", function(req, res) {
        patrons.push(req.body);
        res.json(patrons);
    });
};