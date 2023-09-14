import { NextRequest, NextResponse } from "next/server";
import React from "react";
import mongoose from "mongoose";

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.ohduul8.mongodb.net/`;

    let client;

    try {
        client = await mongoose.connect(MONGODB_URI);
        console.log('DB connected');
        
    } catch(error){
        console.log('There was an error connecting to the DB', error);
    }
}