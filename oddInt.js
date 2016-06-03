/*
www.codewars.com
Javascript training
Title: Find the Odd Int
*/

// Finished code
function findOdd(A) {
  var temp = 0;
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      temp = A[i];
      if (A[i] === A[j]) { count++; }
    }
    if (count % 2 !== 0) { return temp; }
    count = 0;
  }
}

// Updated 01
function findOdd(A) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    var temp = A[i];
    A.forEach(function(entry) {
      if (A[i] === entry) { count++; }
    })
    if (count % 2 !== 0) { return temp; }
    count = 0;
  }
}
