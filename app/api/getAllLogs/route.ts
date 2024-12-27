import { dbConnect, disconnect, getAllLogs } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {    
    const logs = await getAllLogs();    
    return NextResponse.json(logs);
}