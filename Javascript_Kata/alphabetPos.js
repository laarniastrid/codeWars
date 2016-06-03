/*
www.codewars.com
Javascript training
Title: Replace With Alphabet Position
*/

// Finished code
function alphabetPosition(text) {
  var temp = [];
  var alpha = [null, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  text = text.replace(/[,.!'"]/g, '')
    .split(' ')
    .join('')
    .split('')
    .map(function(entry) {
      return entry.toLowerCase();
    })
  text.forEach(function(entry) {
    alpha.forEach(function(value, index) {
      if (entry === value) {
        temp.push(index);
      }
    })
  })
  return temp.join(' ');
}

// Updated 01
function alphabetPosition(text) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .map(function(entry) {
      var temp = null;
      alpha.forEach(function(value, i) {
        if (entry === value) { temp = i + 1; }
      });
      return temp;
  }).join(' ');
}

// Updated 02
function alphabetPosition(text) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split(' ')
    .join('')
    .split('')
    .map((entry) => {
      return alpha.indexOf(entry) + 1;
  }).join(' ');
}
