import { dbConnect, disconnect, getAllExercises } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    const users = await getAllExercises();    
    return NextResponse.json(users);
}