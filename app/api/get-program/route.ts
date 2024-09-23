import { db } from '@/src/lib/firebaseAdmin'
import { Program } from '@/src/types/programs'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const snapshot = await db
      .collection('programs')
      .where('userId', '==', null) // add the user id condition to get programs create by this user
      .get()
    const data: Program[] = []

    snapshot.forEach((doc) => {
      const userData = doc.data()
      data.push({
        id: doc.id,
        image: userData.image,
        title: userData.title,
        listExercises: userData.listExercises,
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
