/*
www.codewars.com
Javascript training
Title: Shortest Word
*/

// Finished code
function findShort(s) {
    s = s.split(' ');
    var result = s[0].length;
    s.forEach(function(entry) {
        result = entry.length < result ? entry.length : result;
    })
    return result;
}
