function fibs(n) {
    if (n <= 0) return []
    if (n === 1) return [0]
    if (n === 2) return [0, 1]

    const seq = [0, 1]
    for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2])

    return seq
}

function fibsRec(n) {
    if (n <= 0) return []
    if (n === 1) return [0]
    if (n === 2) return [0, 1]

    const prevFibs = fibsRec(n - 1)
    const nthFib = prevFibs[n - 2] + prevFibs[n - 3]

    return [...prevFibs, nthFib]
}

console.log(fibsRec(8))
