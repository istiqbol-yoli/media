import { NextResponse } from "next/server"; 
import bcrypt from "bcryptjs";
 import { ConnectDB } from "@/lib/config/db";
 import AdminModel from "@/lib/models/AdminModel"; 

 export async function POST(req){ 
  await ConnectDB(); 
  const {email,password} = await req.json(); 
  const adminExists = await AdminModel.findOne({email});
   if(adminExists){
     return NextResponse.json({
       success:false, msg:"Admin allaqachon mavjud" }) } 
       const hashedPassword = await bcrypt.hash(password,10);
        await AdminModel.create({ email, password:hashedPassword })
         return NextResponse.json({ success:true, msg:"Admin yaratildi" }) }