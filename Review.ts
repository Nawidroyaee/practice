// let str:string = "test";
// let num:number = 39;
// let bol:boolean = true;

import { createImportSpecifier } from "typescript";

// import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";




// 1. Datatypes (primary)
// 2. Code blocks, class, interfaces, functions, abstract classes. {}
// 3. control flow if, else, ,elseif switch, ternary.
// 4. iteration loops, for, while.
// Find examples for all of the above



// export function solution(str: string, ending: string): boolean {
//     return false; // TODO: complete
//   }

// function solution(first:string, ending:string){
//     if ( ending.length > first.length ){
//         return false
//     }

//     if ( ending === "" ){
//         return true
//     }
//     let result:boolean = true;
//     let j:number = first.length - 1;
//     for ( let i = ending.length - 1; i >= 0; i-- ){
//         if ( ending[i]!== first[j]){
//             result = false;
//         }
//         j--;
//     }
//     return result
// }

// console.log(solution("cde", "cde"));

// export function finalGrade (exam: number, projects: number): number {
//     return 0
//   }

// function finalGrade(exam:number, projects:number){
//     for (let i = 0; i < 100; i++){
//         if ( i > 90 ){
//             return 100
//         } 
//     }
// }

// console.log(finalGrade(92, 0));
// -----------------------------------------------------
// function finalGrade(exam:number, projects:number){
//     if (exam > 90 || projects > 10 ){
//         return 100
//     }
    
//     if ( exam > 75 && projects >= 5){
//         return 90
//     }
    
//     if ( exam > 50 && projects >= 2){
//         return 75
//     } else {
//         return 0
//     }
    
//     }


// console.log(finalGrade(50, 2));
// ------------------------------------------



//   function capitalize(arg:string){
//     let result:string = ""
//     for ( let i = 0; i < arg.length; i++){
//         if ( i % 2 == 0){
//             return result.toUpperCase
//         }
//     }
//   }

//   capitalize("abcdef");


// //   (['AbCdEf', 'aBcDeF']);

// function warnTheSheep(queue: string[]): string {
//     return '';
//   }

//   function warnTheSheep(queue:string[]){
//     if( queue[queue.length - 1] === "wolf" ){
//       return  "Pls go away and stop eating my sheep";
//     }
//     for( let i = 0; i < queue.length; i++){
//         if( queue[i] === "wolf" && queue[i+1] === "sheep" ){
//           let sheep:number = queue.length - (i+1);
//           return "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!"
//         }
//     }

//   }

//   console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
//   console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "wolf"]));
//   console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep"]));
// //   console.log(warnTheSheep(["sheep", "sheep", "wolf"]));

// -----------------------------------------



// class Car{
//   model:string;
//   year:number;

//   constructor (model:string, year:number){
//     this.model = model;
//     this.year = year;
//   }

//   honk (){
//     console.log("beep beep")
//   }

//   drive (distance:number){
//     console.log("drive ", distance, " km ")
//   }
// }

// let nawidscar = new Car(" plaide ", 1964)

// nawidscar.honk();
// nawidscar.drive(25);

// interface Shape{
//   getArea():number;
// }

// class Square implements Shape{
//   length:number;
//   width:number;
//   constructor(length:number, width:number){
//     this.length = length;
//     this.width = width;
//   }
//   getArea(){
//     return this.length * this.width;
//   }
// }

// let cuttingBoard = new Square(4, 4)
// console.log(cuttingBoard.getArea());


// export function points(games : string[]): number {
//   return 0 // your code here
// }

// function points(games:string[]){
//   let x:string[] = [""];
//   let y:string[] = [""];
//   let result = 0;
//   if (x < y){
//     result === 0;

//   if ( x > y){
//     result += 3
//   }

//   if ( x === y){
//     result += 1
//   }

//   }

//   return result 
// }

// console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
// console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));







// function countSheep(num:number){
//   if (num > 0 && num === 1){
//     return num + " sheep..."
//   }

//   if (num > 1 ){
//     return  num + "" + "sheep"
//   }
  
//   if (num === 0){
//     return ""
//   }
// }

// console.log(countSheep(3));

// export const centuryFromYear = (year: number): number => {
//   return 1;
// };

// function centuryFromYear(year:number){
//   if (year > 1 && < 101 ){
//     return 1
//   }

//   if (year > 101){}
// }

// console.log(centuryFromYear(1905));

// function invert(array:number[]){
//   let resultArray:number[]= [];
//   for (let i = 0; i < array.length; i++ ){
//     if (array [i] === 0){
//       resultArray.push(0);
//     } else {
//       resultArray.push(array[i] * -1);
//     }
//   }
//   return resultArray;
// }

// console.log(invert([1,2,3,4,5]));



// You only have one

// function check(arr:(number | string)[], x:number | string){
// if (arr.includes (x)){
//   return true;
//   } else {
//   return false;
//   }

// return check
// }

// console.log(check([1, 2, 3, 15], 45));
// console.log(check([1, 2, 3, 15], "kk"));
// console.log(check([1, "kk", 3, 15], "kk"));
// console.log(check([1], "kk"));

// Holiday VIII Duty Free
// export function dutyFree(normPrice: number, discount: number, hol: number): number{
//   return 0
// }


// function removeDecimals(num:number){
//   let decimals:number = num % 1;
//   let result:number = num - decimals;
//   return result;
// }

// // console.log(removeDecimals(294.1176));

// function dutyFree(norPrice:number, discount:number, hol:number){
//   let percentage:number = discount / 100;
//   let discountedPrice:number = norPrice * percentage;
//   let dutyfreePrice:number = norPrice - discountedPrice;
//   let savigs:number = norPrice - dutyfreePrice;
//   let result:number = hol/savigs;

//   return removeDecimals(result);
// }

// console.log(dutyFree(17, 10, 500));




// function removeDecimals(num:number){
//   let decimals:number = num % 1;
//   let result:number = num - decimals;
//   return result;
// }

// function litres(time:number) {
//   let timeGiven:number = time * 0.5

//   return removeDecimals(timeGiven);
// }

// console.log((litres(11.8)));

// -------------

// Collatz
// function collatz(n:number):number{
//   return 0;
// }


// function collatz(n:number){
//     let result = n;
//     let newResult = n/2;
//     let newResult1 = n / 2 + 1
//     for (let i = 0; i <=n; i++){
//         if (i %2 == 0){
//         return newResult
//         }
//         if (newResult % 2 == 0){
//             return newResult
//         }
//     };

    
// }


// console.log(collatz(20));


// function repeatStr(n:number, s:string){
//     let result = "";
//     for (let i = 0; i < n; i++){
//     result += s;
//   }
  
//   return result

// }

//   console.log(repeatStr(3, "I"));



// function squareSum(num:number[]){
//     let result:number = 0;
//     for (let i = 0; i < num.length; i++){
//         let squared = num[i] * num[i];
//         result = result + squared;
//     }
//     return result
// }

// console.log(squareSum([1, 2]));
// console.log(squareSum([1, 2, 3, 5]));
// console.log(squareSum([0, 3, 4, 5]));


// function collatz(n:number){
//     let numofops:number = 1;
//     let num:number = n;
//     let max:number = num;
//     for ( let i = 0; i < max; i++){
//         if (num > max){
//             max = num;
//         }
//         if (num === 1){
//             return numofops;
//         }

//         if (num % 2 === 0){
//             num = num / 2;
//             numofops ++;
//         } else{
//             num = (num * 3) + 1
//             numofops ++;
//         }
//     }
//     return numofops;
// }

// console.log(collatz(20));
// console.log(collatz(15));




// function collatz(n:number){
//     let result:number = n;
//     let numofops:number = 1;
//     while(result !== 1){
//         if (result % 2 === 0){
//             result = result / 2;
//             numofops ++
//         } else {
//             result = (result * 3) + 1;
//             numofops ++
//         }
//     }
//     return numofops;
// }

// console.log(collatz(20));
// console.log(collatz(15));


// function grow(x:number[]){
//     let result:number = 1;
//     for (let i = 0; i < x.length; i++ ){
//         let zarb = x[i] 
//         result =  result * zarb
//     }
//    return result 
// }

// console.log(grow([2, 2, 2, 2, 2, 2]));
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));

// function zeroFuel(dis:number, mpg:number, fuelLeft:number){
//     if (mpg * fuelLeft <= dis){
//         return true
//     }else {
//         return false
//     }

//     return zeroFuel
// }

// console.log(zeroFuel(50, 25 ,2));
// console.log(zeroFuel(100, 25 ,1));



// function solution(start:number, finish:number){
//     let jump:number = 0;
//     let currentpos:number = start;
//     while (currentpos < finish){
//         if(!(currentpos + 3 > finish)){
//             currentpos = currentpos + 3;
//             jump++
//         } else {
//             currentpos++
//             jump++
//         }
//     }
    
//     return jump
// }

// console.log(solution(2, 5));
// console.log(solution(2, 4));
// console.log(solution(1, 5));
// console.log(solution(97, 112));



// function getSum(a:number, b:number){
//     if (a === b){
//         return a;
//     }
//     let smallest:number;
//     let largest:number;
//     if (a < b){
//         smallest = a;
//         largest = b;
//     } else{
//         smallest = b;
//         largest = a;
//     }
//     let result = 0;

//     for (let i = smallest; i <= largest; i++){
//         result = result + i;
//     }

//     return result;
// }

// console.log(getSum(0, -1));
// // getSum(-5, 5);
// console.log(getSum(5, -5));
// // getSum(0, 1);

// function freqSeq(str:string, sep:string){
//     let result:string = "";
//     for (let i = 0; i < str.length; i++){
//         result += howmanyTimes(str[i], str)
//         if ( i < str.length - 1){
//             result +=sep
//         }
        
//     }
//     return result
// }

// console.log(freqSeq("hello world", "-"))

// // freqSeq("hello world", "-");

// function howmanyTimes(char:string, sent:string){
//     let count:number = 0;
//     for (let i = 0; i < sent.length; i++){
//         if (sent[i] === char){
//             count++
//         }
//     }
//     return count;
// }


// export function findShort(s: string){
   
//   }




// findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// findShort("lets talk about javascript the best language"); 
// findShort("i want to travel the world writing code one day"); 
// findShort("Lets all go on holiday somewhere very cold");


// function saleHotdogs(n:number){
//     let moneySpent:number = 0;
//     if (n < 5){
//         moneySpent = n * 100
//     }
//     if (n >= 5 && n < 10){
//         moneySpent = n * 95
//     }
//     if (n >= 10){
//         moneySpent = n * 90
//     }

//     return moneySpent;

// }

// console.log(saleHotdogs(1));
// console.log(saleHotdogs(4));
// console.log(saleHotdogs(5));
// console.log(saleHotdogs(9));
// console.log(saleHotdogs(100));

// -------- This One -----                                  ----------------------------------

// function reverseWord(word:string){
//     let reversedword:string = ""
//     for (let i = word.length - 1; i >= 0; i--){
//         reversedword += word[i]
//     }
//     return reversedword
// }



// function extractWords(sentence:string){
//     let result:string[] = [];
//     let tempWord:string = "";
//     for (let i = 0; i < sentence.length; i++ ){
//         if (sentence[i] !== " "){
//             tempWord += sentence[i]
//         } else {
//             result.push(tempWord);
//             tempWord = "";
//         }
//     }   
//     result.push(tempWord)
//     return result
// }



// function reversedWords(sentence:string){
//     let words:string[] = extractWords(sentence);
//     for ( let i = 0; i < words.length; i++){
//         console.log(words[i]);
//     }
    
// }

// reversedWords("This is a complete, sentece! ok.");






// function gooseFilter(birds:string[]){
//     let geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//     let result:string[] = [];
    




// }

// (gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);





// function past(h:number, m:number, s:number){
    
//     return(h*3600+m*60+s) * 1000



// }


//   console.log(past(1, 1, 1));
//   console.log(past(0, 1, 1));



// function even_or_odd(n:number){
//     let result:string = ""
//     if ( n % 2 === 0 ){
//     result = "Even"
//    }
//     if ( n % 2 === 1 ){
//     result = "Odd"
//    }

//    return result
// }

// console.log(even_or_odd(-3))



// function otherAngle(a:number, b:number){
//     let Triangle:number = 180;
//     let result:number = a + b;
//     let otherAng:number = result - Triangle;
//     if (otherAng < 0){
//         otherAng = otherAng * (-1);
//     }

//     return otherAng
// }


//   console.log(otherAngle(30, 60));
//   console.log(otherAngle(60, 60));
//   console.log(otherAngle(30, 45));
//   console.log(otherAngle(43, 78));



// function angle(n:number){
//     let result:number = (n -2) * 180

//     return result;
// }

//   console.log(angle(3));
//   console.log(angle(4));
//   console.log(angle(5));


// function number(busStops:[number, number][]){
//     let hopOn:number = 0;
//     let hopOff:number = 0;

//     for (let i = 0; i < busStops.length; i++){
//         hopOn += busStops[i][0];
//         hopOff += busStops[i][1];
//     }

//     return hopOn - hopOff;
    
// }

// let myNumber:number = number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);
// console.log(myNumber);


// function hasSurvived(attackers:number[], defenders:number[]){
//     let result:boolean = true;
//     let survioversDef:number = 0;
//     let survioversAtt:number = 0;
//     for (let i = 0; i < attackers.length; i++){
//         for ( let j = 0; j < defenders.length; j++){
//             if (defenders[(j)] > attackers[(i)]){
//                 survioversDef ++;
                
//             }
//             if (attackers[i] > defenders[j]){
//                 survioversAtt ++;
//             }

//             if (survioversAtt > survioversDef){
//                 result = false;
//             }
//             if(survioversDef > survioversAtt){
//                 result = true;
//             }
//             }            
//         }

//     return result;
// }


// //   console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]));
//   console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]));
//   console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]));
//   console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6]));
//   console.log(hasSurvived([3, 5, 7], [2, 4, 6]));
  
  


// let names = [1, "akhmad", "kalbeer", "khalil", 5]

// names.push("Kian")
// names.push[0] = "Test"

// console.log(names)



// function push(arr:number[], element:number){
//     let newLength = arr.length + 1;
//     let temp = new Array(newLength);
  
//     for(let i = 0; i < arr.length; i++){
//       temp[i] = arr[i]
//     }
//     temp[arr.length] = element;
//     arr = temp;
//   }
  
//   let kian:number[] = [1, 2, 3, 4, 5]
  
//   kian.push(8)
//   kian.pop()
//   kian.shift()
//   kian.unshift(3, 4, 0)
  
//   console.log(kian)
  
//   function pop(arr:number[]){
//     let newLength = arr.length - 1;
//     let temp = new Array(newLength);
//     for(let i = 0; i < arr.length -1; i++){
//       temp[i] = arr[i]
//     }
//     console.log(temp);
//     arr = temp;
//   }
  
//   function unshift(arr:number[], element:number){
//      let newLength = arr.length + 1;
//      let temp = new Array(newLength); 
  
//      for(let i = 1; i < newLength; i++){
//       temp[i] = arr[i - 1]
//      }
//      temp[0] = element;
//      arr = temp;
//   }
  
//   function shift(arr:number[] ){
//     let newLength = arr.length - 1;
//     let temp = new Array(newLength); 
  
//     for(let i = 0; i < newLength; i++){
//      temp[i] = arr[i + 1]
//     }
  
//     arr = temp;
//     console.log(arr);
//   }



//   function extractWords(sentence:string){
    //     let result:string[] = [];
    //     let tempWord:string = "";
    //     for (let i = 0; i < sentence.length; i++ ){
    //         if (sentence[i] !== " "){
    //             tempWord += sentence[i]
    //         } else {
    //             result.push(tempWord);
    //             tempWord = "";
    //         }
    //     }   
    //     result.push(tempWord)
    //     return result
    // }

    // console.log(extractWords("this is a book"))



//     function sumCubes(n:number){
//         let sum:number = 0;
//         let result:number = 0;

//         for (let i = 0; i <= n ; i++){
//             sum = (i) * (i) * (i);
//             result += sum;
//         }
//         return result 
// }

// console.log(sumCubes(4));


// function trim(str: string, maxSize: number) {
//     let tempResult: string = "";
//     let result: string = "";
//     let dots: string = "...";

//     if (str.length <= maxSize) {
//         return str;
//     };

//     if (str.length <= 3) {
//         for (let i = 0; i < maxSize; i++) {
//             tempResult += str[i];
//             result = tempResult + dots;
//         }
//         return result;
//     };

//     if(maxSize <= 3){
//         for (let i = 0; i < maxSize; i++) {
//             tempResult += str[i];
//             result = tempResult + dots;
//         }
//         return result;
//     }
//     for (let i = 0; i < maxSize - 3; i++) {
//         tempResult += str[i];
//         result = tempResult + dots;
//     }
//     return result;
    
// }
// console.log((trim("Creating kata is fun", 14)));
// console.log(trim("He", 1));
// console.log(trim("Code Wars is pretty rad", 50));
// console.log(trim("VXENx ZWl ZPSp rPX", 2));

// function doors(n:number){
  
//     let doors:boolean[] = [];
  
//     for(let i = 0; i < n; i++){
//       doors.push(false);
//     }
  
//     for(let student = 1; student <= n; student++){
//       for(let i = 0; i <= n; i = i + student){
//         if(student === 1 && i !== n){
//           doors[i] = !doors[i]
//         }
  
//         if(student !== 1){
//           if(i !== 0){
//             doors[i-1] = !doors[i-1]
//           }
//         }
//       }
//     }
  
//     let count = 0;
//     for(let i = 0; i < doors.length; i++){
//       if(doors[i] === true){
//         count++;
//       }
//     }
//     console.log(count);
//     return count;
//   }


// class Cell {
//     num:number;
//     words:string;
//     truths:boolean;

//     constructor( value:number | string | boolean){
//         if (typeof value === "number"){
//             this.num = value;
//         }
//     }
// }

// function draw (deck:string[]){
//     let drawnCards:string[] = [];
//     let storedValue:string []= []
//     while( deck.length != 0){
//       for ( let i = 0; i < deck.length; i++){
//       deck.shift();
      
//     }

//   }
//     return drawnCards;
// };

// console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]));

// function drawnCards (deck:string[]){
//   let drawn:string[] = [];
//   let drawn2:string[] = [];

//     for (let i = 0; i < deck.length; i++){
//       if ( i % 2 === 0){
//         drawn.shift();
//         drawn.push(deck[i])
//       }
//       deck.shift()
//       drawn2.push(deck[i]);
//     }

//     return drawn
// }
// console.log(drawnCards(["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"]));



// -> Home Work --- 02 - 03 - 2023 <-
// class Cell {
//     input:string | number | boolean;
    

//     constructor (input:number | string | boolean){
//         if (typeof input === 'number' && typeof input === 'string' && typeof input === 'boolean'){
//             this.input = input;
//         }

//         console.log(this.input);
        
//     }
// }

// class Column {
//     cells: Cell[];

//     constructor(cells: Cell[]){
//       this.cells = cells;
//     }
// }

// class Row {
//   cells: Cell[];

//     constructor(cells: Cell[]){
//       this.cells = cells;
//     }
// }


function disemvowel(str:string){
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u' &&
      char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U') {
      result += char;
    }
  }
  return result;
}


console.log(disemvowel("This website is for losers LOL!"))
