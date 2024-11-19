import { criptografia, cifraLetra, decifraLetra } from "./cesar.js"

const texto = "Criptografia de Cesar"
const chave = 3
const resultado = criptografia(texto, chave, cifraLetra)
console.log("Texto criptografado:", resultado)
console.log(texto.length)
console.log(resultado.length)

const resultado2 = criptografia(resultado, chave, decifraLetra)
console.log("Texto descriptografado:", resultado2)