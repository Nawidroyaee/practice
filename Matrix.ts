// const matrix = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
]

const findPosition = (num:number) => {
    let result:number[] = [];
    
    if(num > 0 && num <= 4){
        let position = matrix[0].indexOf(num);
        result.push(0);
        result.push(position);
    }
    
    if(num > 4 && num <= 8){
        let position = matrix[1].indexOf(num);
        result.push(1);
        result.push(position);
    }
    
    if(num > 8 && num <= 12){
        let position = matrix[2].indexOf(num);
        result.push(2);
        result.push(position);
    }
    
    if(num > 12 && num <= 16){
        let position = matrix[3].indexOf(num);
        result.push(3);
        result.push(position);
    }

    return result;
}

class Buggy {
    position:number[];
    constructor(num:number){
        this.position = findPosition(num);
    }

    goUp(){
        if(this.position[0] > 0){
            this.position[0]--
        } else {
            console.log("We are really sorry, because you have hit the wall.");
        }
    }

        goDown(){
            if (this.position[1] > 4)
                this.position [1]
            console.log(matrix[1][0])
        }

//     goLeft(){}

//     goRight(){}

// }



let hareersBuggy = new Buggy(8);













console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);
console.log(matrix[0][3]);

console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);
console.log(matrix[1][3]);

console.log(matrix[2][0]);
console.log(matrix[2][1]);
console.log(matrix[2][2]);
console.log(matrix[2][3]);

console.log(matrix[3][0]);
console.log(matrix[3][1]);
console.log(matrix[3][2]);
console.log(matrix[3][3]);