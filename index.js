import obj from "./cesar.js"

console.log()
console.log("============ PROGRAMA DE CIFRAGEM DE DADOS ============")
console.log()


const texto = "criptografia de cesar"
const chave = 3

const resultadoCriptografado = obj.criptografia(texto, chave, obj.cifraLetra)
console.log("Texto criptografado:", resultadoCriptografado)

const resultadoDecifrado = obj.criptografia(resultadoCriptografado, chave, obj.decifraLetra)
console.log("Texto descriptografado:", resultadoDecifrado)


const novoTexto = "prova de web dois"
const novaChave = 1

const novoResultado = obj.criptografia(novoTexto, novaChave, obj.cifraLetra)
console.log("Texto criptografado:", novoResultado)

const novoResultadoDecifrado = obj.criptografia(novoResultado, novaChave, obj.decifraLetra)
console.log("Texto descriptografado:", novoResultadoDecifrado)
console.log()