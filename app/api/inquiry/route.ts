import { NextResponse } from 'next/server';

export async function POST() {
  // Placeholder for future inquiry handling (CRM, email, or workflow integration).
  return NextResponse.json(
    { ok: false, message: 'Inquiry endpoint not yet configured.' },
    { status: 501 }
  );
}
