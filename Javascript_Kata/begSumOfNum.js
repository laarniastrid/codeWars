/*
www.codewars.com
Javascript training
Title: Beginner Series #3 Sum of Numbers
*/

// Finished code
function GetSum(a, b)
{
  var min = Math.min(a, b),
      max = Math.max(a, b),
      result = 0;
  for (var i = min; i < max + 1; i++) {
      result += i;
  }
  return result;
}
