// controller
var Contracts = require("../model/index")
var mongoose = require('mongoose')

// Querys a fazer com a base de dados

//
// Contracts
//

module.exports.getContracts = () =>{
    return Contracts.find().sort("_id")
        .then(resposta => {
            console.log("recebidoController")
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.getContract = (id) => {
    return Contracts.findOne({_id: id})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.getContractsYear = (year) => {
    return Contracts.find({DataInicioContrato: {$regex: year}})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.getContractsInstitution = (institution) => {
    return Contracts.find({NomeInstituicao: institution})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.getCourses = () => {
    return Contracts.distinct("Curso")
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro}) 
}

module.exports.getInstitutions = () => {
    return Contracts.distinct("NomeInstituicao")
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}

module.exports.addContract = (contract) => {
    return Contracts.create(contract)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deleteContract = (id) => {
    return Contracts.deleteOne({_id: id})
        .then(resposta => {
            return resposta})
        .catch(erro => {
            return erro})
}
