// api/qrcodes.ts

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const qrcodes = await prisma.qrcodes.findMany();
        return NextResponse.json(qrcodes);
    } catch (err) {
        return NextResponse.json({ message: "Failed to fetch QR codes: " + err });
    }
}
