export class Ingredient {

    // public name: string;
    // public amount: number;

    // constructor(name:string, amount: number){
    //     this.name = name;
    //     this.amount = amount;

    // }

    public description: string;

    // The constructor below is equivalent to the above code
    constructor(public name: string, public amount: number){
        this.description = 'Use some of ' + name;
    }
}