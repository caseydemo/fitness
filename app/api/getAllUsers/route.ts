import { dbConnect, disconnect, getAllUsers } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {    
    const users = await getAllUsers();    
    return NextResponse.json(users);
}