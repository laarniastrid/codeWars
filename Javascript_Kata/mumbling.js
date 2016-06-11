/*
www.codewars.com
Javascript training
Title: Unique in Order
*/

// Finished code
function accum(s) {
  var count = 1;
  return s.split('')
    .map((entry) => {
      var str = '';
      for (var i = 0; i < count; i++) {
        if (i === 0) { str += entry.toUpperCase(); }
        else { str += entry.toLowerCase(); }
      }
      count++;
      return str;
  })
    .join('-')
}

// Updated 01
function accum(s) {
  return s.split('')
    .map((entry, index) => {
      var str = '';
      for (var i = 0; i < index + 1; i++) {
        if (i === 0) { str += entry.toUpperCase(); }
        else { str += entry.toLowerCase(); }
      }
      return str;
  })
    .join('-')
}
