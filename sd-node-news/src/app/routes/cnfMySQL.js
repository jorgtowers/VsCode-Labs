const mysql = require('../../config/MySQLHandler');

module.exports = app => {


  app.get('/api/news', (req, res) => {
    mysql('SELECT * FROM post')
      .then(data=>res.send(data))
      .catch(err=>res.send(err));
  });



  app.get('/', (req, res) => {
    mysql('SELECT * FROM post')
    .then(data=>res.render('news', {
      news: data
    }))
    .catch(err=>res.send(err));

  });

  app.post('/news', (req, res) => {
    const { title, news } = req.body;
    mysql('INSERT INTO post SET ? ',
      {
        Titulo:title,
        Texto:news
      }
    )
    .then( res.redirect('/'))
    .catch(err=>res.send(err));
  });
  app.post('/news-json', (req, res) => {
    console.log(req);
    const { title, news } = req;
    mysql('INSERT INTO post SET ? ',
      {
        Titulo:title,
        Texto:news
      }
    )
    .then( res.redirect('/'))
    .catch(err=>res.send(err));
  });
};