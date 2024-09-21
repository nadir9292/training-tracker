type Gender = 'Male' | 'Female' | 'Other'

export interface UserData {
  id: string
  pseudo: string
  email: string
  createdAt: Date
  image: string
  height?: number
  weight?: number
  gender?: Gender
  dateOfBirth?: string
}
