

function push(arr:number[], element:number){
  let newLength = arr.length + 1;
  let temp = new Array(newLength);

  for(let i = 0; i < arr.length; i++){
    temp[i] = arr[i]
  }
  temp[arr.length] = element;
  arr = temp;
}

let kian:number[] = [1, 2, 3, 4, 5]

kian.push(6)

console.log(kian)

// function pop(arr:number[]){
//   let newLength = arr.length - 1;
//   let temp = new Array(newLength);

//   for(let i = 0; i < arr.length -1; i++){
//     temp[i] = arr[i]
//   }
//   console.log(temp);
//   arr = temp;
// }

// function unshift(arr:number[], element:number){
//    let newLength = arr.length + 1;
//    let temp = new Array(newLength); 

//    for(let i = 1; i < newLength; i++){
//     temp[i] = arr[i - 1]
//    }
//    temp[0] = element;
//    arr = temp;
// }

// function shift(arr:number[] ){
//   let newLength = arr.length - 1;
//   let temp = new Array(newLength); 

//   for(let i = 0; i < newLength; i++){
//    temp[i] = arr[i + 1]
//   }

//   arr = temp;
//   console.log(arr);
// }