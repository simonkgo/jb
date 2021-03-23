import { Length, IsNumber, IsDateString, IsNotEmpty, Min, ValidateIf } from 'class-validator';

export class Employee {
  /*
    this validation
    min 5 will work only in put method
    if you try to pass 4 id in put method it will return error minimum 5
    if you try to use in patch it will work beause we set put group
  */
  
  @IsNumber() // see that event if you send string you change the type with + operator in the controller;
  @Min(5, {
    groups: ['put'],
  })
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


  /*
     !also can do like that
     !but see in addEmployeeTest in controller how to change the function in the controller;
   */
  // constructor(id: number, obj?: Employee) {
  //   this.id = id ?? Math.floor(Math.random() * 1000);
  //   this.firstName = obj?.firstName || "";
  //   this.lastName = obj?.firstName || "";
  //   this.title = obj?.title || "";
  //   this.city = obj?.city || "";
  //   this.country = obj?.country || "";
  //   this.birthDate = obj?.birthDate || "";
  // };
};
