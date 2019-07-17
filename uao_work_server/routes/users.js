var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'uao_work'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST Listeners */

router.post('/signin', function(req, res, next) {
  console.log(req.body)
  let data = []
  data.push(req.body.mail);
  const sql = 'SELECT * FROM users WHERE mail = ?';
  mc.query(sql,data,(err,rows) => {
    if(err){
      res.json(null)
    }else{
      console.log(rows)
      if(rows[0].password == req.body.password) {
        res.json(rows[0])
      }else{
        res.json(null)
      }
    }
  })
});

module.exports = router;
