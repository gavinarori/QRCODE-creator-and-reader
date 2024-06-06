import {prisma} from './prisma';

export async function dbConnection(){
    try{await prisma.$connect();}catch(err){ return Error("failed to connect to database")}
    
}