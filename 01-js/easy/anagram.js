/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1 === '' && str2 === '') return true;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  if(str1.length < str2.length){
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = obj[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) {
      obj[str2[i]] = obj[str2[i]] - 1;
      if (obj[str2[i]] == 0) {
		  delete obj[str2[i]];
      }
    }
  }   
  if (Object.values(obj).length===0) return true;
  return false;
}


module.exports = isAnagram;
