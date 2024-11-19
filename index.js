import { criptografia, cifraLetra, decifraLetra } from "./cesar.js"

console.log()
console.log("============ PROGRAMA DE CIFRAGEM DE DADOS ============")
console.log()


const texto = "criptografia de cesar"
const chave = 3

const resultadoCriptografado = criptografia(texto, chave, cifraLetra)
console.log("Texto criptografado:", resultadoCriptografado)

const resultadoDecifrado = criptografia(resultadoCriptografado, chave, decifraLetra)
console.log("Texto descriptografado:", resultadoDecifrado)


const novoTexto = "prova de web dois"
const novaChave = 1

const novoResultado = criptografia(novoTexto, novaChave, cifraLetra)
console.log("Texto criptografado:", novoResultado)

const novoResultadoDecifrado = criptografia(novoResultado, novaChave, decifraLetra)
console.log("Texto descriptografado:", novoResultadoDecifrado)
console.log()