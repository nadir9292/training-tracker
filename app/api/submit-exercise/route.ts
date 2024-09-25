import { db } from '@/src/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    // change to req !!!
    const data = {
      "image": "",
      "targetedMuscles": 
        "[   {     \"muscle\": \"Quadriceps\",     \"involvement\": \"primary\"   },   {     \"muscle\": \"Glutes\",     \"involvement\": \"primary\"   },   {     \"muscle\": \"Hamstrings\",     \"involvement\": \"secondary\"   },   {     \"muscle\": \"Calves\",     \"involvement\": \"secondary\"   },   {     \"muscle\": \"Core\",     \"involvement\": \"secondary\"   } ]",
      "title": "Lunges",
      "type": "strength",
      "visibility": true,
      "userId": null
    }
    

    const newExerciseId = db.collection('exercises').doc().id

    // Ajoute l'exercice à la collection 'exercises'
    await db.collection('exercises').doc(newExerciseId).set(data)

    return NextResponse.json(
      { message: 'Your program has been submitted.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error posting data:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
