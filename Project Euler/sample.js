
/*5.
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//array = [[1,2,3,4],[7,8,9,0]];

function largestOfFour(arr) {
	//largest_number = 0;
	new_Array = [];
	for(var i =0; i < arr.length; i++) { //iterate inside the outer array
		largest_number = arr[i][0]; //store the first element of the sub array 
		for(var j = 0; j < arr[i].length;j++){ //iteratie over the elements inside the sub array
			if(arr[i][j] > largest_number) { //if the element of the sub array is greater than the first element of the sub array
				largest_number = arr[i][j]; //store the new large number in the largest_number
				//console.log(largest_number);
			}	
		}
		new_Array.push(largest_number);	//push the updated the largest_number to the new_array
	}

	return new_Array;
}
//result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
result = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//result = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
console.log(result);
*/


//6. Confirm the ending of the string
/*

function confirmEnding(str,target) {

	var lengh_of_target = target.length;
	var sliced_input = str.slice(-lengh_of_target);
	if (sliced_input == target) {
		return true;
	} else {
		return false;
	}
}

result = confirmEnding("Open sesame","same");
console.log(result);
*/

/*
//7. Repeat a string after a string
function repeatStringNumTimes(str,num) {

	new_string = "";
	for (var i = 0;i < num; i++) {
		new_string+=str;
	}

	return new_string;
}

result = repeatStringNumTimes("abc",3);
console.log(result);
*/

/*
//8. Truncate a string

function truncateString(str,num){
	if (str.length > num) {
		return str.slice(0,num) + "...";
	} else {
		return str;
	}
}


result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(result);
*/

/*
//9. Finders Keepers
 function findElement(arr,func) {
 	return arr.find(func);
 }

var result = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(result);
*/

/*
//10. returning boolean values
	
	var result = new_string_array.map(function(val) {
		return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
	});
	return result.join(" ");

result = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
console.log(result);
//console.log(typeof(new_string));
//console.log(result);
*/


/*
//11. Use splice and slice
//Exmaple: ([[1,2,3],[4,5,6]],1) returns [4,1,2,3,5,6]

function frankenSplice(arr1,arr2,num){
//var array1 = [1,2,3];
//var array2 = [4,5,6];
var array_copy = arr1.slice(0,);
var array2_copy = arr2.slice(0,);
//var num = 1;
//console.log(array2_copy);
//array2_copy = array2_copy.concat(array_copy);
//console.log(array2_copy);
for (var i=array_copy.length-1;i>=0;i--){
	array2_copy.splice(num,0,array_copy[i]);
}

return array2_copy;
}

//result = frankenSplice([1,2],["a","b"],1);
result = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
console.log(result);
*/


/*
//12. Remove falsy values
//Example: [7,"ate","",false,9] -> [7,"ate",9]
//array = [7,"ate","",NaN,9];

function bounce(arr) {
	return arr.filter(Boolean);
}

//var new_array = array.filter(val => Boolean(array[val]) == false);
*/


/*
//13. Where do I belong?
//example: getIndexToIns([1,2,3,4],1.5) returns 1 (index)
function getIndexToIns(arr,num) {
	return arr.filter(val => num > val).length;
}

/*
arr.filter(function (val) {
	if(num > arr[i]) {
		count++;
	}
})


var result = getIndexToIns([10,20,30,40,50],35);
console.log(result);
*/


/*
//14. Mutation
//Example: ['hello','hello'] => true
//['hello','hey'] => false

function mutation(arr) {
	//array = ['hello','helo'];
	var test = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();

	for (var i = 0;i  <test.length;i++) {
		if(target.indexOf(test[i]) < 0)
			return false;
	}
	return true;
}

result = mutation(['mary','army']);
console.log(result);
*/

/*
//15. Chunky monkey. Funtion that splits an array into groups of length of size and
// returns them as a two dimensional array.
//Eg: (['a','b','c','d'],2) => [['a','b'],['c','d']]

//var array = ['a','b','c','d'];

function chunkArrayInGroups(arr,size) {
var new_array = [];

for (var i = 0;i<arr.length;i+=size) {
	new_array.push(arr.slice(i,i+size));
}	

return new_array;
}

var result = chunkArrayInGroups(['a','b','c','d'],2);
console.log(result);
*/

/*
function Dog(name) {
	this.name = name;
}

Dog.prototype.numLegs = 4;

let hound = new Dog("Snoopy");
console.log(hound);
*/


/*
//MAP and FILTER in javascript
//using the map function

const ratings = watchList.map(item => ({
	title: item['title'],
	rating: item['imdbRating']
}));

const filteredList = watchList.map(item => ({
	title: item.Title,
	rating: item.imdbRating
})).filter(item => item.rating > parseInt(8.0));


//filter in a for loop where this is the code inside a function block
for (let i =0; i < this.length;i++) {
	if(callback(this[i]) === true) {
		newArray.push(this[i]);
	}
}
*/
/*
const averageRating = watchList
	.filter(item => item.Director === 'Christopher Nolan')
	.map(item => Number(item.imdbRating))
	.reduce((rating,currentValue) => rating + currentValue)/watchList.filter(item => item.Director==="Christopher Nolan").length;
	
return averageRating;
*/

/*
const squareList = (arr) => {
	let new_arr = arr
		.filter(num => (num > 0))
		.filter(num => !(num % 1 !=0))
		.map(num => num**2);
return new_arr;
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
*/

/*
var globalArray = [5,6,3,2,9];

function nonMutatingSort(arr) {
	let new_array = [...arr];
	new_array = new_array.sort();
	return new_array;
}

let answer = nonMutatingSort(globalArray);
console.log(answer);
*/

/*
str = "Hello World,I-am code";
console.log(str.split(/\W/));
*/

/*
str = "May-the-force-be-with-you";
str = str.split(/\W/);
new_str = str.join(' ');
console.log(new_str);
*/

/*
//str = "Winter Is Coming";
var str = "A Mind Needs Books Like A Sword Needs A Whetstone";
str = str.toLowerCase().split(/\W/);
var new_str = str.join('-');
console.log(new_str);
*/

/*
//var str = "A Mind Needs Books Like A Sword Needs A Whetstone";
var str = " Winter Is  Coming";
str = str.toLowerCase().trim().split(/\s+/).join('-');
console.log(str);
*/

/*
function checkPositive(arr) {
  // Add your code below this line
  let result = arr.every(function(currentValue){
  	return (currentValue > -10);
  });
  return result;
  // Add your code above this line
}
let answer = checkPositive([1, 2, 3, -4, 5]);
console.log(answer);
*/

//Intermediate Algorithm Scripting
/*
//1. Example: sumAll([4,1]) ---> 10 (1+2+3+4)
function sumAll(arr) {
	var arr = [10,5];
	start_pos = arr[0];
	end_pos = arr[1];
	sum = 0;
	//console.log(start_pos);
	//console.log(end_pos);
	if(start_pos < end_pos) {
		for(let i = start_pos;i<=end_pos;i++) {
		sum += i;
	} }else {
		for(let i = start_pos;i>=end_pos;i--) {
			sum+=i;
		}
	}
	console.log(sum);
}

var answer = sumAll([1,4]);
console.log(answer);
*/

/*
//2. Difference between 2 arrays
//Example: [1,2,3,5] , [1,2,3,4,5] should return [4]
arr = [1,2,3,5]
other_arr = [1,2,3,4,5]
//merged_arr = arr.concat(other_arr);
const result =  arr
	.concat(other_arr)
	.filter(item => !arr.includes(item) || !other_arr.includes(item));

console.log(result);
*/

/*
//3. remove the repeated elements in an array
//Eg: [1,2,3,3,4,4,5],4,5 --> [1,2,3]
function destroyer(arr) {
	var args = Array.from(arguments).slice(1);
	console.log(arr);
	return arr.filter(item => !args.includes(item));
	
}

let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);
*/

/*
//4. check name-value pairs in an array and return the array
//if found
//Eg: [{first:"romeo",last:"montague",....}] and the second argument is 
//{last:"montague"} --> must return the name-value pair from the first argument

function whatIsInAName(collection,source) {
	var srcKeys = Object.keys(source);
	
	return collection.filter(function(obj) {
		return srcKeys
			.map(function(key) {
				return obj.hasOwnProperty(key) && obj[key] === source[key];
			})
			.reduce(function(a,b) {
				return a && b;

			});
	});

}


var result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
console.log(result);
*/

/*
//5. Spinal case is all lowercase-words-joined-by-a-dashes
str = "thisIsSpinalTap";

str = str.replace(/([a-z])([A-Z])/g,"$1 $2");
console.log(str);
*/

/*
//6. Pig Latin
//Example: california ==> aliforniacay, algorithm ==> algorithmway
var str = "glove";
var regex = /[aeiou]/gi;

if(str[0].match(regex)) {
	console.log(str+"way");
} else if(str.match(regex) === null) {
	console.log(str+'ay');
} else {
	//find how many consonants before the first vowel and store it
	var vowel_index = str.indexOf(str.match(regex)[0]);
	console.log(vowel_index);
	str = str.substr(vowel_index)+	str.substr(0,vowel_index)+"ay";
	console.log(str);
}
*/

/*
//7. Search and Replace
function myReplace(str,before,after) {
	if(before[0] == before.charAt(0).toUpperCase()) {
		var new_after = after[0].charAt(0).toUpperCase()+after.slice(1);
		var new_str = str.replace(before,new_after);
	} else {
		var new_str = str.replace(before,after);
	}
	//before = before.charAt(0).toLowerCase()+before.slice(1);
	return new_str;
}

//var result = myReplace("Let us go to the store", "store", "mall");
var result = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

console.log(result);
*/


/*
//8. DNA pairing
//Example: Base pairs are AT and CG. pairElement(ATCGA) must return 
//[[A,T],[T,A],[C,G],[G,C],[A,T]]

function pairElement(str) {
	var pairs = {
		A:"T",
		T:"A",
		C:"G",
		G:"C"
	};

	var arr = str.split("");
	return arr.map(x => [x,pairs[x]]);
}

var result = pairElement("ATCGA");
console.log(result);
*/


/*
//9. Missing letter
//Example: abce --> returns 'd'
str = 'abce';
new_array = [];
diff_of_ascii = [];
//first, get the ascii characters for all the letters
//second, calculate the difference bn these ascii characters
//third,if difference > 1, then get the ascii of the nex letter
//fourth, convert the ascii to the alphabet
for(let i = 0;i< str.length;i++) {
	if(str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
		console.log(String.fromCharCode(str.charCodeAt(i-1)+1));
	}
}
*/


/*
//10. Sorted union
//example: [1,3,2],[5,2,1,4],[2,1] returns [1,3,2,5,4]
function uniteUnique(arr) {
	var finalArray = [];

	for(let i = 0;i < arguments.length;i++) {
		var arrayValue = arguments[i];
		for(let j = 0;j < arrayValue.length;j++) {
			var indexValue = arrayValue[j];

		if(finalArray.indexOf(indexValue) === -1) {
			finalArray.push(indexValue);
		}
	}
}

	return finalArray;
}

var result = uniteUnique([1,3,2],[5,2,1,4],[2,1]);
console.log(result);
*/

/*
//stateless component
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));



//stateless functional component
const Camper = (props) => {
	return (
		<div>
			<p>The name is: {props.name}</p>
		</div>
		);
};

Camper.defaultProps = {
	name: "CamperBot"
}

Camper.propTypes = {
	name: PropTypes.string.isRequired
}
*/

/*
#specify the url
page = 'https://economictimes.indiatimes.com/lazyloadlistnew.cms?msid=2146843&curpg=100&img=0'
#page = 'https://www.deccanherald.com/national/north-and-central/red-alert-for-paytm-employees-one-official-tested-coronavirus-positive-in-gurgaon-810556.html'
get_page = ur.urlopen(page)

#parse the html page and store in a variable
parsed_content = BeautifulSoup(get_page, 'html.parser')

content = parsed_content.find('div', attrs={'class':'eachStory'})

#get only data
content_data = content.text

#print data
print(content_data)
*/

import requests
from bs4 import BeautifulSoup


links = []
headlines = []
date = []
page = 'https://economictimes.indiatimes.com/lazyloadlistnew.cms?msid=2146843&curpg=100&img=0'
response = requests.get(page)
soup = BeautifulSoup(response.content, "html.parser")
content = soup.find_all('h3')
for info in content:
    links.append(content.)











