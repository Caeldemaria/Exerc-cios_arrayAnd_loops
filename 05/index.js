
const original = [1, 4, 12, 21, 53, 88, 112];
const numerosPares = []

for (let i = 0; i < original.length; i++) {
    const numero = original[i];


    if (numero % 2 === 0) {

        numerosPares.push(numero);
    }
}
console.log(numerosPares);
