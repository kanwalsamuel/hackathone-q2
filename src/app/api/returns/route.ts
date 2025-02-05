// src/app/api/returns/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
  }

  // Sample return data. Replace with actual data fetching logic.
  const returns = [
    { returnId: 'r001', productName: 'Product 1', reason: 'Defective', status: 'Requested' },
    { returnId: 'r002', productName: 'Product 2', reason: 'Wrong Item', status: 'Processed' },
  ];

  return NextResponse.json({ returns });
}
