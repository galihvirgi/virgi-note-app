const routes = require("./routes")

const notesPlugin = {
    name : 'notes',
    version : '1.0.0',
    register : async (server, options) => {
        server.route(routes)
    }
}

module.exports = notesPlugin