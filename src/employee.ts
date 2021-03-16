import {IsInt, Length, Matches,Validate,ValidationArguments,ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";


@ValidatorConstraint({ name: 'customText', async: false })
export class DateFormat implements ValidatorConstraintInterface {
  validate(text: string) {
    if(new RegExp(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i).test(text)){
      return true 
    }
    return false
  }
}




export default class Employee {
  @IsInt()
  id: number;
  @Length(2, 100)
  firstName: string;
  @Length(2, 100)
  lastName: string;
  @Length(2, 1000)
  title: string;
  @Length(2, 1000)
  country: string;
  @Length(2, 1000)
  city: string;
  @Validate(DateFormat,{
    message:"birthDate must be format yyyy-mm-dd"
  })
  birthDate: string;

  constructor(firstName:string, lastName:string, title:string, country:string, city:string, birthDate:string,id?:number) {
    this.id = id ?? Math.floor(Math.random() * 1000)
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.country = country;
    this.city = city;
    this.birthDate = birthDate;
  }
}
