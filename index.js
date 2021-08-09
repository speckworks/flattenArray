let array1 = [1,2,3,['a','b','c']];

let finalArray = [];
const flatten = (newArray)=>{
 for(let i = 0; i < newArray.length; i++){
    if(Array.isArray(newArray[i])){
      finalArray = finalArray.concat(newArray[i]);
    } else {
      finalArray.push(newArray[i]);
    }
  }
  console.log(finalArray);
}

flatten(array1);