
import { IsNumber, IsString, Length, Min, Max, isString, IsNotEmpty, IsDate, IsDateString, IsPositive} from "class-validator";


export class Employee {
    @IsNotEmpty({
        groups:['put,patch']
    })
    @IsPositive({
        groups:['patch']
    }) 

    id: number;
    @IsNotEmpty()
    @Length(2,100)
    firstName: string;
    @IsNotEmpty()
    @Length(2,100)
    lastName: string;
    @IsNotEmpty()
    @Length(2,100)
    title: string;
    @IsNotEmpty()
    @Length(2,100)
    country:string;
    @IsNotEmpty()
    @Length(2,100)
    city: string;
    @IsNotEmpty()
    @IsDateString()
    @Length(2,100)
    birthDate: string;
    
    constructor(id: number,firstName: string, lastName: string, title: string,country:string,city: string, birthDate: string){

        this.id= id
        this.firstName=firstName
        this.lastName=lastName
        this.title=title
        this.country=country
        this.city=city
        this.birthDate=birthDate
    }
}