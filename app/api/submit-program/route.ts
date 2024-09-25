import { db } from '@/src/lib/firebaseAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const newProgramId = db.collection('programs').doc().id

    await db.collection('programs').doc(newProgramId).set(data)

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error posting data:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
