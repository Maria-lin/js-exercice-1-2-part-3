/*Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.*/
var obj1 = {
    name: "maria",
    age: 19,
    degree: "L3",
    section : "IT "
}

// Define the second object
var obj2 = {
    age: 19,
    degree: "L3",
    section : "IT "
}
var obj3 = {
    name: "maria",
    degree: "L3",
    section : "game dev "
}

// Define the function check
function compare(obj1, obj2) {

    for (i in obj2) {
       
        if (obj1[i] !== obj2[i]) {
            return false;
        }

     
    }
    return true
}

// Call the function
console.log(compare(obj1, obj2))



/****************************************************exo 2******************************************************** 
 * Write a JavaScript function to find the common elements from two arrays
console.log(difference([1, 2, 3], ));
["1", "2"] */


var arr = [1,2,3];
var tab  = [100, 2, 1, 10];

function defference (arr, tab) {
    var lol = [];
    for ( var i=0; i<arr.length; i++){
        for ( var j=0; j<arr.length; j++){
            if (arr[i]=== tab [j])
            { lol.push(arr[i])}


        }
    }
    return lol ; 
}
console.table( defference (arr, tab));