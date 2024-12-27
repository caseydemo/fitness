import { dbConnect, disconnect } from "@/app/lib/db";
import { getAllCombinedData } from "@/app/lib/views";
import { NextResponse } from "next/server";

export async function GET() {    
    const data = await getAllCombinedData();    
    return NextResponse.json(data);
}