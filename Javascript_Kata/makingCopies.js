/*
www.codewars.com
Javascript training
Title: Unique in Order
*/

// Finished code
function copyList(l){
  var temp = [];
  l.forEach(function(value) {
    temp.push(value);
  })
  return temp;
}

// Updated 01
function copyList(l){
  return l.slice(); // forgot about .slice() and that it returns a copy of the array
}
