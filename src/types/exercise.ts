export interface Exercise {
  id: string
  title: string
  image: string
  recovery?: number
  parameters?: string
  targetedMuscles: string
  totalTime?: number
  type: string
  userId?: string
  visibility: boolean
}
