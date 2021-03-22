import {Min, Max, IsInt, Length, IsString} from "class-validator";

export class Product {
    id: number;

    @IsString()
    @Length(2,10)
    name: string;
    
    @IsInt()
    @Min(50)
    @Max(150)
    price: number;

    @IsInt()
    stock: number;

    constructor(name: string, price: number, stock: number){
        this.id = Math.floor(Math.random() * 1000);
        this.name = name;
        this.price = price;
        this.stock = stock;
    };
};
