/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toUpperCase();
  let specialCh = '`~!@#$%^&*()_-+={}[]|\:;"<,>.?/';
  for(let i = 0;i<str.length;i++){
    if(specialCh.includes(str[i])){
      str = str.replace(str[i],'');
    }
  }
  str = str.replaceAll(' ', '');
  let s = 0, e = str.length-1;
  while(s<e){
    if(str[s]!==str[e]) return false;
    s++;
    e--;
  }
  return true;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'));

module.exports = isPalindrome;
