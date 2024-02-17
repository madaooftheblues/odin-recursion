function merge(left, right) {
    if (left.length === 0) return right
    if (right.length === 0) return left

    const sorted = []
    let lp, rp
    lp = rp = 0

    while (1) {
        if (lp >= left.length) {
            sorted.push(...right.slice(rp, right.length))
            return sorted
        }
        if (rp >= right.length) {
            sorted.push(...left.slice(lp, left.length))
            return sorted
        }

        if (left[lp] <= right[rp]) sorted.push(left[lp++])
        else sorted.push(right[rp++])
    }
}

function mergeSort(array) {
    if (array.length <= 1) return array
    const mid = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid, array.length))

    return merge(left, right)
}
