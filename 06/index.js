const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0
let pares = []
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if (numero % 2 === 0) {
        pares.push(numero)


    }

}
for (let i = 0; i < pares.length; i++) {
    soma += pares[i]
}
console.log(soma)
