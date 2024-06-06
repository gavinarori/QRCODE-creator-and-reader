import {prisma} from '@/lib/prisma'
import getCurrentUser from '@/app/actions/gerCurrentUser'
import { dbConnection } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request:Request){
    try{
        const biycleQrcode = await getCurrentUser()
        if(!biycleQrcode?.id){
            return new NextResponse('unauthorized', {status: 401, })
        }

        const body = await request.json();
        const { qrcodes } = body
        await dbConnection()

        const postQrcodes = await prisma.qrcodes.create({
            data: {
                qrcodes
            }
        });
        return NextResponse.json({ message: "success",  postQrcodes}, { status: 201 });

    }catch(err){
        return  NextResponse.json({ message: "failed to add the qrcode " + err});
    }

}
