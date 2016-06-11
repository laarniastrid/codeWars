/*
www.codewars.com
Javascript training
Title: Unique in Order
*/

// Finished code
function insertDash(num) {
  var str = '';
  num = num.toString();
  num.split('').forEach((entry, i) => {
    if (num[i + 1] == null) {
      str += entry;
    } else {
      str += entry % 2 !== 0 && num[i + 1] % 2 !== 0 ? entry + '-' : entry;
    }
  })
  return str;
}
