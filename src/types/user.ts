export class User {
  pseudo: string
  firstName: string
  lastName: string
  email: string
  adress: string
  numberTelephone: number
  country: string
  height: number
  weight: number
  password: string
  confirmPassword: string

  constructor(
    pseudo: string,
    firstName: string,
    lastName: string,
    email: string,
    adress: string,
    numberTelephone: number,
    country: string,
    height: number,
    weight: number,
    password: string,
    confirmPassword: string
  ) {
    this.pseudo = pseudo
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.adress = adress
    this.numberTelephone = numberTelephone
    this.country = country
    this.height = height
    this.weight = weight
    this.password = password
    this.confirmPassword = confirmPassword
  }
}
