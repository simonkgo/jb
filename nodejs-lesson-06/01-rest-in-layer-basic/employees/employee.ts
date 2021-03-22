import {IsString,IsNumber,Length,IsDateString,IsNotEmpty,IsOptional} from 'class-validator';

export class Employee {

    id:number;
    
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Length(2,100)
    firstName:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Length(2,100)
    lastName:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Length(2,100)
    title:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @Length(2,100)
    country:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
     @Length(2,100)
    city:string;

    @IsOptional()
    @IsDateString()
    birthDate:number;

    constructor(firstName:string,lastName:string,title:string,country:string,city:string,birthDate:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.country = country;
        this.city = city;
        this.birthDate = birthDate;
    }
}