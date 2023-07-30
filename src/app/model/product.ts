export class Product {
    id!: number; //In case of error change to: id!: number;
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
}
