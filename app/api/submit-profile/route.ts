import { db } from '@/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!data.email) {
      return NextResponse.json({ message: 'email not found.' }, { status: 401 })
    }

    const userSnapshot = await db
      .collection('users')
      .where('email', '==', data.email)
      .get()

    if (!userSnapshot) {
      return NextResponse.json({ message: 'User not found.' }, { status: 409 })
    }

    const userDoc = userSnapshot.docs[0]

    await userDoc.ref.update({
      pseudo: data.pseudo,
      height: data.height,
      weight: data.weight,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
    })

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error posting data:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
