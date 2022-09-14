// 2) Write a javascript function find_largest to return the nth largest number

// in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]

// find_largest(3) will return third largest number from the above array -
// which is 8.

function removeDuplicates(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
}

function find_largest(arr,num){
	arr=removeDuplicates(arr);
	arr.sort(function(a,b){
		return b-a;
	});
	return arr[num-1];
}


const arr=[3,45,45,6,7,23,5,7,8]
const k=3
const res=find_largest(arr,k)

console.log(`${k}th largest in given array is ${res}`);