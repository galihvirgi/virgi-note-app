const routesUser = require("./routes")

//Ini plugin untuk UserNote
const UserPlugin = {
    name : 'user',
    version : '1.0.0',
    register : async (server, options) => {
        server.route(routesUser)
    }
}

module.exports = UserPlugin