var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contrato.list()
    .then(info => {
      res.render('index', { o: info, d: data })
    })
    .catch(erro =>{
      res.render('error',{error: erro})
    }
    )
});

/* GET contract page. */
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contrato.getContract(req.params.id)
    .then(info => {
      res.render('contract', { o: info, d: data })
    })
    .catch(erro =>{
      res.render('error',{error: erro})
    }
    )
});

/* GET institution page. */
router.get('/inst/:nipc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contrato.getInst(req.params.nipc)
    .then(info => {
      obj={}
      obj['NomeInstituicao'] = req.params.nipc
      obj['NIPCInstituicao'] = info[0]['NIPCInstituicao']
      obj['lista']=info
      res.render('inst', { o: obj, d: data })
    })
    .catch(erro =>{
      res.render('error',{error: erro})
    }
    )
});

module.exports = router;
