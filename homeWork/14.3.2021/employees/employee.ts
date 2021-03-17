import { IsNumber, IsString, Length, IsDateString, IsInt, IsPositive, IsOptional } from 'class-validator'


export class Employee {
    @IsOptional()
    @IsNumber()
    @IsInt()
    @IsPositive()
    id: number
    @IsOptional()
    @IsString()
    @Length(2, 100)
    firstName?: string
    @IsOptional()
    @IsString()
    @Length(2, 100)
    lastName?: string
    @IsOptional()
    @IsString()
    @Length(2, 100)
    title?: string
    @IsOptional()
    @IsString()
    @Length(2, 100)
    country?: string
    @IsOptional()
    @IsString()
    @Length(2, 100)
    city?: string
    @IsOptional()
    @IsDateString()
    birthDate?: string

    constructor(firstName?: string, lastName?: string, title?: string, country?: string, city?: string, birthDate?: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.title = title
        this.country = country
        this.city = city
        this.birthDate = birthDate
    }
}