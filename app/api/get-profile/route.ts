import { db } from '@/lib/firebaseAdmin'
import { UserData } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  try {
    const snapshot = await db
      .collection('users')
      .where('email', '==', req.nextUrl.searchParams.get('email'))
      .limit(1)
      .get()

    const data: UserData[] = []

    snapshot.forEach((doc) => {
      const userData = doc.data()
      data.push({
        id: doc.id,
        pseudo: userData.pseudo,
        email: userData.email,
        createdAt: new Date(
          userData.createdAt._seconds * 1000 +
            userData.createdAt._nanoseconds / 1000000
        ),
        image: userData.image,
        height: userData.height,
        weight: userData.weight,
        gender: userData.gender,
        dateOfBirth: userData.dateOfBirth,
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
