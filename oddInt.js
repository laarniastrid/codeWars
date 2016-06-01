/*
www.codewars.com
Javascript training
Title: Find the odd int
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
