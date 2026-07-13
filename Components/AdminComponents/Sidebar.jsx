// import { assets } from '@/Assets/assets'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='flex flex-col bg-slate-100'>
//         <div className='px-2 sm:pl-14 py-3 border border-black'>
//         <Image src={assets.logo} width={120} alt=''/>
//         </div>
//         <div className='w-28 sm:w-80 h-[100vh] relative py-12 border  border-black'>
//             <div className='w-[50%] sm:w-[80%] absolute right-0'>
//             <Link href="/admin/addProduct" className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'>
//                 <Image src={assets.add_icon} width={28} alt='' />
//                  <p>Add blogs</p>
//             </Link>

//             <Link href="/admin/blogList" className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'>
//                 <Image src={assets.blog_icon} width={28} alt='' />
//                  <p>Blog lists</p>
//             </Link>

//             <Link href="/admin/subscriptions" className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'>
//                 <Image src={assets.email_icon} width={28} alt='' />
//                  <p>Subscriptions</p>
//             </Link>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Sidebar




"use client";

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Sidebar = () => {

    const router = useRouter();

    const logout = async () => {
        try {
            const res = await axios.get("/api/admin/logout");

            if (res.data.success) {
                router.replace("/admin/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col bg-slate-100'>

            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} width={120} alt='' />
            </div>

            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

                <div className='w-[50%] sm:w-[80%] absolute right-0'>

                    <Link
                        href="/admin/addProduct"
                        className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'
                    >
                        <Image src={assets.add_icon} width={28} alt='' />
                        <p>Add blogs</p>
                    </Link>

                    <Link
                        href="/admin/blogList"
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'
                    >
                        <Image src={assets.blog_icon} width={28} alt='' />
                        <p>Blog lists</p>
                    </Link>

                    <Link
                        href="/admin/subscriptions"
                        className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0_#000000]'
                    >
                        <Image src={assets.email_icon} width={28} alt='' />
                        <p>Subscriptions</p>
                    </Link>

                </div>

                {/* Logout Button */}
                <div className='absolute bottom-8 right-0 w-[50%] sm:w-[80%]'>
                    <button
                        onClick={logout}
                        className='w-full flex items-center justify-center border border-red-600 bg-red-600 text-white font-medium px-3 py-2 shadow-[-5px_5px_0_#000000] hover:bg-red-700 transition'
                    >
                        Logout
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Sidebar