import { db } from '@/src/lib/firebaseAdmin' // Assurez-vous que l'initialisation de Firebase est correcte
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    // change to req !!!
    const data = {
      image: '',
      parameters: '{ "repetitions": 0, "weight": 0 }',
      recovery: '0',
      targetedMuscles:
        '[ { "muscle": "Back", "involvement": "primary" }, { "muscle": "Biceps", "involvement": "secondary" }, { "muscle": "Legs", "involvement": "secondary" }, { "muscle": "Core", "involvement": "secondary" } ]',
      title: 'Rowing Machine',
      totalTime: '0',
      type: 'cardio',
      visibility: true,
      userId: null,
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
