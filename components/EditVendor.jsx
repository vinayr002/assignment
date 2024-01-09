"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditVendor({id, name, bank, account, address1, address2, city, country, zip}) {
  const [newName, setNewName] = useState(name);
  const [newBank, setNewBank] = useState(bank);
  const [newAccount, setNewAccount] = useState(account);
  const [newAddress1, setNewAddress1] = useState(address1);
  const [newAddress2, setNewAddress2] = useState(address2);
  const [newCity, setNewCity] = useState(city);
  const [newCountry, setNewCountry] = useState(country);
  const [newZip, setNewZip] = useState(zip);

  const router = useRouter();

  const haldleSubmit = async(e)=>{
    e.preventDefault();

    if (!newName || !newBank || !newAccount || !newAddress1 || !newAddress2 || !newCity || !newCountry || !newZip) {
      alert("All fields are required!");
      return;
    }

    try {
      const res= await fetch(`/database/topic/${id}`,{
        method:"PUT",
        headers:{
          "content-type": "application.json",
        },
        body: JSON.stringify({newName, newBank, newAccount, newAddress1, newAddress2, newCity, newCountry, newZip})
      })

      if(!res.ok){
        throw new Error("Failed to update")
      }
      
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={haldleSubmit} className="flex flex-col gap-3">
        <input
        onChange={(e)=>setNewName(e.target.value)}
        value={newName}
        type="text" placeholder="Vendor name" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>

        <div className="flex gap-2">
            <input
            onChange={(e)=>setNewBank(e.target.value)}
            value={newBank}
            type="text" placeholder="Bank name"  className="border-2 border-slate-400 px-5 py-2   rounded-md w-full"/>
            <input
            onChange={(e)=>setNewAccount(e.target.value)}
            value={newAccount}
            type="number" placeholder="Account number"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
        </div>

        <input
        onChange={(e)=>setNewAddress1(e.target.value)}
        value={newAddress1}
        type="text" placeholder="Address line-1" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>
        <input
        onChange={(e)=>setNewAddress2(e.target.value)}
        value={newAddress2}
        type="text" placeholder="Address line-2" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>

        <div className="flex gap-2">
            <input
            onChange={(e)=>setNewCity(e.target.value)}
            value={newCity}
            type="text" placeholder="City"  className="border-2 border-slate-400 px-5 py-2   rounded-md w-full"/>
            <input
            onChange={(e)=>setNewCountry(e.target.value)}
            value={newCountry}
            type="text" placeholder="Country"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
            <input
            onChange={(e)=>setNewZip(e.target.value)}
            value={newZip}
            type="number" placeholder="Zip code"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
        </div>

        <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-md sm:w-fit w-full">Update Vendor</button>
    </form>
  )
}
