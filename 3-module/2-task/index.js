let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  return arr.filter(i => (a <= i && i <= b ))
}

let filtered = filterRange(arr, 1, 4);

