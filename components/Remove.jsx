"use client"

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function Remove({id}){
  const router = useRouter();
  const removeVendor = async()=>{
    const confirmed = confirm('Are you sure?')

    if (confirmed){
      const res= await fetch(`/database/topic?id=${id}`,{
        method: "DELETE",
      });
      if(res.ok){
        router.refresh();

      }
    }
  };
  return (
    <button onClick={removeVendor} className="text-red-400">
        <HiOutlineTrash size={24}/>
    </button>
  )
}

