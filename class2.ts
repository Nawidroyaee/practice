class Calculator {
    total:number = 1;
    
    multiply(n:number){
        this.total = n * this.total
    }
    
    add(n:number){
        this.total = n + this.total;
    }
}

let esab = new Calculator();
esab.multiply(2)
esab.multiply(3)

console.log(esab)

export function lovefunc(flower1: number, flower2: number): boolean = {
    // Do we love each other?
}

