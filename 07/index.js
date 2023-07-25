const nomes = ["Ana", "Joana", "Carlos", "amanda", 'alex'];
let nome = []
for (let i = 0; i < nomes.length; i++) {
    const nomeComA = nomes[i]
    if (nomeComA[0].toLowerCase() === 'a') {
        nome.push(nomeComA)
    }

} console.log(nome)