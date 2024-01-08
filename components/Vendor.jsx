
"use client"
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

const VendorLists = dynamic(() => import('./VendorLists'), { ssr: false });
const Button = dynamic(() => import('./Button'), { ssr: false });

const Vendor = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return <div>
      <VendorLists />
    </div>
  } else {
    return (
      <div className='grid place-items-center h-screen -mt-24'>
        <Button />
      </div>
    );
  }
}

export default Vendor;