/*
www.codewars.com
Javascript training
Title: Unique in Order
*/

// Finished code
var uniqueInOrder = function(iterable){
  var temp = [];
  var n = iterable;
  if (typeof n === 'string') {
    n = n.replace(/\s/g, '')
      .split('');
  }
  n.forEach((entry, i) => {
    if (n[i + 1] !== null && n[i + 1] !== entry) {
      temp.push(entry);
    }
  });
  return temp;
};
