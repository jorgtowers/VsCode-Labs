const mysql = require('mysql');
const cnn = {
  host: 'localhost',
  user: 'solution',
  password: 'developer',
  database: 'sdnews' 
};
module.exports = (query,obj)=> {
  return new Promise((resolve, reject)=> {
    const engine = mysql.createConnection(cnn);
    if(obj==undefined)
      engine.query(query, (err, result) => {
        resolve(result);
        reject(err);
      });
    else
      engine.query(query,obj, (err, result) => {
        resolve(result);
        reject(err);
      });
  });  
}