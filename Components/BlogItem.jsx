import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title, description, category, image, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] blog-card'>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt=' ' width={400} height={400} className='border-b border-black blog-img'/>
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block  bg-black text-white  text-sm blog-category'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900 blog-title' >{title}</h5>

        <p  className='mb-3  text-sm tracking-tight text-gray-700 blog-description' dangerouslySetInnerHTML={{__html:description}}>
       </p>

        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
         


          <button className="cssbuttons-io-button">
                    Batafsil
                    <div className="icon">
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </div>
                </button>


                
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
