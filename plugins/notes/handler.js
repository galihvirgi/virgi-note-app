const mysql = require ('mysql2/promise');

  
const addNoteHandler = async (request, h) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'virgi2007btg',
        database: 'notes',
    });
    const title = request.payload.title
    const content = request.payload.content
    const writer = request.payload.writer

    try {
        const sql = 'INSERT INTO `notes`.`note` (`title`, `content`, `writer`) VALUES(?, ?, ?)'
        const values = [title, content, writer]

        const [results, field] = await connection.execute(sql, values);
        const response = h.response("berhasil").code(200);
        return response;
    } catch (err) {
        console.log(err);
    }

}

const getNoteHandler = async (request, h) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'virgi2007btg',
        database: 'notes',
    });
    try {
        const [results] = await connection.query(
          'SELECT * FROM `note`'
        );
        const response = h.response(results).code(200);
        return response;
    } catch (err) {
        console.log(err);
    }
    
}

const getNoteId = async (request, h) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'virgi2007btg',
        database: 'notes',
    });
    const id = request.params.id
     
    try {
        const sql = 'SELECT * FROM `note` WHERE `id` = ?';
        const values = [id]

        const [results, field] = await connection.execute(sql, values);

        const response = h.response(results);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateNoteHandler = async (request, h) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'virgi2007btg',
        database: 'notes',
    });
    const title = request.payload.title
    const content = request.payload.content
    const id = request.params.id

    try {
        const sql = 'UPDATE `note` SET `title` = ?, `content` = ? WHERE `id` = ?'
        const values = [title, content, id]
 
        const [results, field] = await connection.execute(sql, values);
        const response = h.response("berhasil").code(200);
        return response;
    } catch (err) {
        console.log(err);
    }
}

const deleteNoteHandler = async (request, h) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'virgi2007btg',
        database: 'notes',
    });
    
    const id = request.params.id

    try {
        const sql = 'DELETE FROM `note` WHERE id=?'
        const values = [id]

        const [results, field] = await connection.execute(sql, values);
        const response = h.response("berhasil").code(200);
        return response;
    } catch (err) {
        console.log(err);
    }
}
module.exports = { addNoteHandler, getNoteHandler, getNoteId, updateNoteHandler, deleteNoteHandler }
