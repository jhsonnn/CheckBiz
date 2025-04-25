import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { bizNumber } = await req.json();

  const isValid =
    typeof bizNumber === 'string' && bizNumber.length === 10 && bizNumber.startsWith('1');

  return NextResponse.json({
    valid: isValid,
    name: isValid ? 'test company' : '등록되지 않은 사업자',
    status: isValid ? 'active' : '폐업 또는 미등록',
  });
}