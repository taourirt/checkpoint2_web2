function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < 3; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}
console.log(dot_product([1,2,3], [1,2,3]))
console.log(dot_product([2,4,6], [2,4,6]))
console.log(dot_product([1,1,1], [0,1,-1]))

function isOrthogonal(v1, v2) {
    let ps = 0;
    for (let i = 0; i < 3; i++) {
    ps += v1[i] * v2[i];
  }
    return ps == 0;
}

console.log(isOrthogonal([1,2,3], [1,2,3]))
console.log(isOrthogonal([3,4,5], [3,4,-5]))
console.log(isOrthogonal([1,1,1], [0,1,-1]))

function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}

console.log(insertionSort([16,7,5]))