const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novo = []
for (let i = 0; i < original.length; i++) {
    const arr = original[i]
    if (arr >= 10 || arr > 100) {
        novo.push(arr)
    }
}
console.log(novo)