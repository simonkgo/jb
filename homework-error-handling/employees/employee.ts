import { Length, IsDateString, IsNotEmpty, IsPositive,ValidateIf } from 'class-validator';

export class Employee {
  @IsPositive()
  @IsNotEmpty()
  id: Number;
  @IsNotEmpty()
  @Length(2, 100)
  firstName: String;
  @IsNotEmpty()
  @Length(2, 100)
  lastName: String;
  @IsNotEmpty()
  @Length(2, 100)
  title: String;
  @IsNotEmpty()
  @Length(2, 100)
  city: String;
  @IsNotEmpty()
  @Length(2, 100)
  country: String;
  @IsNotEmpty()
  @IsDateString()
  birthDate: String;

  constructor(
    id: Number,
    firstName: String,
    lastName: String,
    title: String,
    city: String,
    country: String,
    birthDate: String
  ) {
    this.id = id ?? Math.floor(Math.random() * 1000);
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.city = city;
    this.country = country;
    this.birthDate = birthDate;
  }
}
