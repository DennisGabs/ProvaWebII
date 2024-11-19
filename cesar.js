const letras = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z' ]

function criptografia( mensagem, chave, converter ) {
    let novaMensagem = ''
    mensagem.split('').forEach(letra => {
        novaMensagem += converter(letra, chave)
    });
    return novaMensagem
}

function cifraLetra(letra, chave){
    if(letra.match(" ")){
        return " "
    }
    let resultado = letras[ (letras.indexOf(letra.toLowerCase()) + chave) % letras.length ]
    return resultado
}

function decifraLetra(letra, chave){
    if(letra.match(" ")){
        return " "
    }
    let index = (letras.indexOf(letra.toLowerCase() ) - chave) % letras.length
    if(index < 0){
        index = letras.length - chave
    }
    let resultado = letras[ index ]
    return resultado
}

export { criptografia, cifraLetra, decifraLetra }