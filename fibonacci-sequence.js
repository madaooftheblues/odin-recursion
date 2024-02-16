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

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}
