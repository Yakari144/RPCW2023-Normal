
var mongoose = require('mongoose')

var contractsSchema = new mongoose.Schema({
    NomeInstituicao: String,
    NIPCInstituicao: Number,
    NomeTitularContrato: String,
    CienciaID: String,
    ORCID: String,
    CienciaVitae: String,
    Carreira_RPN: String,
    Categoria_RPN: String,
    Vinculo_RPN: String,
    RegimePrestacaoServico: String,
    DataInicioContrato: String,
    DataFimContrato: String,
    ETIremunerado: Number,
    ProcedimentoVinculacao: String,
    AreasInvestigacao: String,
    NivelFormação: String,
    InstituicaoEnsino: String,
    PaisInstituição: String,
    AnoDiploma: Number,
    Curso: String,
    AreaCNAEF: String,
    AreaFORD: String,
    ProvasAgregacao: Number,
    TituloEspecialista: Number,
    ProvasCoordenacao: Number,
    ProvasAptidao: Number
})


//                              nome da colecao em singular
module.exports = mongoose.model('contract',contractsSchema)

// o que é cada argumento do mongoose.model?
// 1º nome da coleção
// 2º nome do schema
// 3º nome da coleção na BD
