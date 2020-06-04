const sql = require('../../config/SQLServerHandler');
module.exports = app => {

  app.get('/api/estatu', (req, res) => {
    sql('select * from Administracion.Estatu')
      .then(data=>res.send(data))
      .catch(err=>res.send(err));
  });

  app.get('/api/estatus', (req, res) => {

    sql('select * from Administracion.Estatus')
    .then(data=>res.send(data))
    .catch(err=>res.send(err));

  });

  app.get('/', (req, res) => {


    sql('select * from Configuracion.Estatus')
    .then(data=>res.render('estatus', {
      news: data
    }))
    .catch(err=>res.send(err));

  });




};