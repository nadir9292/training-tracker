import { db } from '@/src/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const eventProgramID = db.collection('eventPrograms').doc().id

    await db.collection('eventPrograms').doc(eventProgramID).set(data)

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error posting data:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
