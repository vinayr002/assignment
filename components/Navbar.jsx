"use client"

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';

const Navbar = () => {
  const {status, data: session} = useSession();
  return (
    <div className='flex p-4 shadow-md justify-between items-center m-4'>
        <Link href={"/"} className='font-bold text-lg text-blue-500'>Assignment </Link>
        {status === 'authenticated' ? (
          <div className='flex gap-2'>
            
            <Link href={"/addVendor"}  className='bg-slate-900 text-white px-6 py-2 rounded-md'>Add Vendor</Link>
            
            <button onClick={() => signOut() } className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign out</button>
            <Image src={session?.user?.image} width={40} height={30} className='rounded-full'/>  
          </div>
        ): <button onClick={() => signIn("google")} className='bg-slate-900 text-white px-6 py-2 rounded-md'>Sign In</button> }
        
    </div>
  )
}

export default Navbar