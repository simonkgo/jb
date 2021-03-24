export default class Employee {
    id: number
    firstName: string
    lastName: string
    title: string
    country: string
    city: string
    birthDate: string
    imageName: string
    constructor(firstName: string, lastName: string, title: string, country: string, city: string, birthDate: string, imageName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.title = title
        this.country = country
        this.city = city
        this.birthDate = birthDate
        this.imageName = imageName
    }
}