import { IsNumber, IsString, Length, Min, Max } from 'class-validator'



export class Product {
    @IsNumber()
    id: number
    @IsString()
    @Length(2, 10)
    name: string
    @IsNumber()
    @Min(50)
    @Max(150)
    price: number
    @IsNumber()
    stock: number

    constructor(name: string, price: number, stock: number) {
        this.id = Math.floor(Math.random() * 1000)
        this.name = name
        this.price = price
        this.stock = stock
    }

}