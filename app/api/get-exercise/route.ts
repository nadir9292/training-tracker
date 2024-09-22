import { db } from '@/src/lib/firebaseAdmin'
import { Exercise } from '@/src/types/exercise'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const snapshot = await db.collection('exercises').get()
    const data: Exercise[] = []

    snapshot.forEach((doc) => {
      const userData = doc.data()
      data.push({
        id: doc.id,
        image: userData.image,
        parameters: userData.parameters,
        recovery: userData.recovery,
        targetedMuscles: userData.targetedMuscles,
        title: userData.title,
        totalTime: userData.totalTime,
        type: userData.type,
        visibility: userData.visibility,
        userId: userData.userId,
      })
    })

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
