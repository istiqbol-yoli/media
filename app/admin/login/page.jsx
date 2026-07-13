"use client";

import React from 'react';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function LoginPage(){ 
    const router = useRouter(); 
    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 
const handleLogin = async(e)=>{ e.preventDefault(); 
    const res = await axios.post("/api/admin/login",
    { email, password });
    if (res.data.success) {
        console.log("Login Success");
        router.push("/admin/addProduct");
        // window.location.href = "/admin/addProduct";
        console.log("Push bo'ldi");
    }
         else
         { alert(res.data.msg); } } 


    

return ( <div className="h-screen flex items-center justify-center"> <form onSubmit={handleLogin} className="border p-8 rounded w-96"> <h1 className="text-2xl font-bold mb-5">Admin Login</h1> <input type="email" placeholder="Email" className="w-full border p-2 mb-3" onChange={(e)=>setEmail(e.target.value)} /> <input type="password" placeholder="Parol" className="w-full border p-2 mb-4" onChange={(e)=>setPassword(e.target.value)} /> <button className="bg-black text-white w-full py-2"> Kirish </button> </form> 


<div className="absolute top-5 left-5">
  <Link
    href="/"
    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition"
  >
    🏠 <span>Bosh sahifa</span>
  </Link>
</div>
</div> )

}



