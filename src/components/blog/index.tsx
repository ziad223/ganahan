'use client'
import Image from 'next/image'
import React from 'react'
import { Link } from '../../../navigation'

interface BlogPost {
  id: number
  img: string
  text: string
}

interface BlogProps {
  post: BlogPost
}

const Blog: React.FC<BlogProps> = ({ post }) => {
  return (
   <Link href={`/blog/${post.id}`}>
    <div className='bg-white'>
      <Image
        src={post.img}
        alt='blog'
        width={410}
        height={210}
        className='w-full h-auto'
      />

      <p className='p-5 lg:text-lg text-base leading-[35px]'>
        {post.text}
      </p>
    </div>
   </Link>
  )
}

export default Blog
