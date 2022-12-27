// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// split('').reverse().join('');
// 'Mcdondlds'-> 'm''c' 'd'...->'d''c''m'->
// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation

function arrayCopy(src,srcPos,dst,dstPos,length){
    const subArray=src.slice(srcPos,srcPos+length);//srcPos-start ,
    console.log("subArray-"+subArray);
     dst.splice(dstPos,0,...subArray);
    //TODO implement here
}
function count(array, str){
    return array.reduce(function (acc,value) {
       if(value === str){
            acc++;
       } else{
           return acc;
       }
    },0);
    //TODO implement here
}
// function displayOccurrences(array){
//     const res= array.reduce(function (acc,value){
//         if(acc[value]){
//             //defined previosly
//             acc[value]++;
//         }else{
//             //undefined ,new value
//             acc[value]=1;
//         }
//     },{} );
//     //TODO implement here
// }
function displayOccurrences(array) {
    let counter = array.reduce(function (storage, value) {
        storage[value] = (storage[value] || 0) + 1
        console.log(storage);
        return storage
    }, {})
    console.log(counter)
}
/*
*acc-{a:7, hello:3};
*value -'hello';
*
*
*
*
*
* /
 */

function ulSurround(strings){
    //TODO implement here
}
function lengthSort(array){
    return array.sort(function(a,b){
        if(a.length>b.length) return 1;
        if(a.length ===b.length) return 0;
        if(a.length<b.length) return -1;
    })
    //TODO implement here
}
//
const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

const res2=database.filter(item =>item.isMarried===true);
console.log(res2);
    console.log(database.values());

function oddlySort() {
    const isMarried = database.filter(function (value){
        if (value.isMarried){
            return database.values()
        }
    });