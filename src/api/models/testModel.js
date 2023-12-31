const db = require('../../config/db');

exports.get = async () =>{
    let message = 'Something went wrong',data = [],code = 500;
    try {
        const title = await db.query(
            `SELECT * FROM test `,[]
        );
        message ="no title found",code = 404,data  = [];
        if(title.length){
            message  = "title list found";
            data = title;
            code  = 200
        }
    } catch (error) {
        message = error;
    }
    return {message,code,data};
}

exports.create = async (req)=>{
    let message = 'Something went wrong',data = [],code = 500;
    try {
        const title = await db.query(
            `INSERT INTO test(title) VALUES (?)`,[req.title]
        )
        message = "Error in creating title successfully",code = 404,data = [];
        if(title.affectedRows){
            message = "title is created successfully";
            code = 201;
        }
    } catch (error) {
        message = error;
    }
    return {message,data,code};
}