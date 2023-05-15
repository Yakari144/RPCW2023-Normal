var axios = require('axios')



module.exports.list = function(){
    return axios.get('http://localhost:15015/contracts')
            .then(res =>{
                return res.data
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.getContract = function(id){
    return axios.get('http://localhost:15015/contracts/'+id)
            .then(res =>{
                return res.data
            })
            .catch(erro =>{
                return erro
            })
}

module.exports.getInst = function(inst){
    return axios.get('http://localhost:15015/contracts?inst='+inst)
        .then(res => {
            return res.data
        })
        .catch(erro => {
            return erro
        })
}

