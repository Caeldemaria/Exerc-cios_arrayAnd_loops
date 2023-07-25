const letras = ["A", "a", "B", "C", "E", "e"];
let quanti = 0
for (let letra of letras) {
    if (letra === "e") {
        quanti++
        console.log(`Foram encontradas ${quanti} letras "E" ou "e"`)
        break
    }
    if (letra != "e" || letra != "E") {
        console.log('nenhum foi encontrado')
        break
    }


}
