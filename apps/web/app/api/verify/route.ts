import { mockVerify } from 'mocks'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { bizNumber } = await req.json()
  return NextResponse.json(mockVerify(bizNumber))
}