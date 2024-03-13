const { addNoteHandler, getNoteHandler, updateNoteHandler, deleteNoteHandler, getNoteId } = require("./handler");

const routes = [
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getNoteHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteId
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteHandler
    },
    
]


module.exports = routes