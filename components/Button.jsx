"use client"

import Image from 'next/image'
import { signIn } from 'next-auth/react'


const Button = () => {
  return (
    <button
    onClick={()=>signIn('google')}
     className='flex gap-4 items-center shadow-xl rounded-lg pl-3'>
        <Image src="/search.png" width={30} height={30} />
        <span className='bg-blue-500 text-white px-4 py-3'>
        Sign in with Google
        </span>
    </button>
  )
}

export default Button