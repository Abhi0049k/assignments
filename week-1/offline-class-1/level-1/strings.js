
console.log('####################################');

function getLength(str){
	console.log(str.length);
}
getLength('Hello World');

console.log('####################################');

function findIndexOf(str, target){
	console.log(str.indexOf(target));
}
findIndexOf("Hello World", "world");

findIndexOf("Hello World", "World");

findIndexOf("Hello World", "H");


console.log('####################################');

function findLastIndex(str, target){
	console.log(str.lastIndexOf(target));
}

findLastIndex("hello World", "l");


console.log('####################################');

function getSlice(str, start, end, extr=""){
	let bag = str.slice(start,end);
	console.log(bag);
}

getSlice('Hello World', 1, 3);

console.log("Mangalam Kumar".slice(0, 3));
console.log("substr is deprecated");
console.log('####################################');

function replaceWord(str, replacement){
	console.log(str.replace("world", "JS"));
}

replaceWord("Hello world", "");


console.log('####################################');

const value = "Hello My name is Mangalam Kumar";
console.log(value.split(" "));


console.log('####################################');

let val = "   Amazing ";
console.log(val.trim());


console.log('####################################');

console.log(val.toUpperCase());

console.log(val.toLowerCase());

console.log(parseInt("323"));
console.log(parseInt("heljalsf"));
console.log('####################################');

const initialArray = [1, 2, 3];

console.log(initialArray);

console.log(initialArray.pop());

initialArray.push(4);

console.log(initialArray);

console.log(initialArray.shift());

console.log(initialArray);

console.log(initialArray.unshift(1));

console.log(initialArray);
