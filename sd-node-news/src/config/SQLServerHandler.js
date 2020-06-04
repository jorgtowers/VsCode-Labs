const sql = require('mssql');
const cnn = {
    user: 'SIGE',
    password: 'SIGE',
    server: '192.168.222.14', 
    database: 'SIGE' 
};
module.exports = (query)=>{
    return new Promise((resolve, reject)=> {
        sql.connect(cnn, (err)=> {
            if (err) 
                reject(err.originalError.info);
            else {
                // create Request object
                let engine = new sql.Request();
                // query to the database and get the records
                engine.query(query, (err, data)=> {
                    if (err) 
                        reject(err.originalError.info);
                    else 
                        resolve(data.recordset);
                });
            }
            
        });
    });
};