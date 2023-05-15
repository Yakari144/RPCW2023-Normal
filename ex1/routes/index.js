
var express = require('express');
var router = express.Router();
var Api = require('../controller/index');


router.get('/contracts', function(req, res, next) {
  if(req.query.year){
    Api.getContractsYear(req.query.year)
      .then(resposta => {
        res.jsonp(resposta)}
      )
      .catch(erro => {
        return erro}
      );
  }
  else if(req.query.inst){
    Api.getContractsInstitution(req.query.inst)
      .then(resposta => {
        res.jsonp(resposta)}
      )
      .catch(erro => {
        return erro}
      );
  }
  else{
  Api.getContracts()
    .then(resposta => {
      res.jsonp(resposta)})
    .catch(erro => {
      return erro});
  }
});

router.get('/contracts/courses', function(req, res, next) {
  Api.getCourses()
    .then(resposta => {
      res.jsonp(resposta)}
    )
    .catch(erro => {
      return erro}
    );
});
router.get('/contracts/institutions', function(req, res, next) {
  Api.getInstitutions()
    .then(resposta => {
      res.jsonp(resposta)}
    )
    .catch(erro => {
      return erro}
    );
});

router.get('/contracts/:id', function(req, res, next) {
  Api.getContract(req.params.id)
    .then(resposta => {
      res.jsonp(resposta)})
    .catch(erro => {
      return erro});
});


router.post('/contracts', function(req, res, next) {
    Api.addContract(req.body)
      .then(resposta => {
        res.jsonp(resposta)})
      .catch(erro => {
        res.status(521).json({error: erro, message: "Erro na obtenção de um exame"});
        });
});

router.delete('/contracts/:id', function(req, res, next) {
  Api.deleteContract(req.params.id)
    .then(resposta => {
      res.jsonp(resposta)})
    .catch(erro => {
      return erro});
});



module.exports = router;