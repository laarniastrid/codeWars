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
