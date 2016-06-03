/*
www.codewars.com
Javascript training
Title: You're a Square!
*/

// Finished code
var isSquare = function(n){
  var temp = Math.sqrt(n);
  if (temp % 1 === 0) { return true; }
  else { return false; }
}
