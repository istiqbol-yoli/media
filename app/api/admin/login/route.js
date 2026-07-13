import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import { ConnectDB } from "@/lib/config/db";
import AdminModel from "@/lib/models/AdminModel";

export async function POST(req){ 
    await ConnectDB();

    const {email,password} = await req.json();

    const admin = await AdminModel.findOne({email});

    if(!admin){ return NextResponse.json({ success:false, msg:"Email noto‘g‘ri" }) }

    const isMatch = await bcrypt.compare(password,admin.password);

    if(!isMatch){ return NextResponse.json({ success:false, msg:"Parol noto‘g‘ri" }) }

    const token = jwt.sign( {id:admin._id}, process.env.JWT_SECRET, {expiresIn:"7d"} );

    const response = NextResponse.json({ success:true, token });

    response.cookies.set("token",token,{ httpOnly:true, secure:false, path:"/" });

    return response;
}