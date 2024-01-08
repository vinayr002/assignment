"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const AddVendor = () => {
  const [name, setname] = useState("");
  const [bank, setbank] = useState("");
  const [account, setaccount] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [zip, setzip] = useState("");

  const router = useRouter();

  const haldlesubmit = async(e)=>{
    e.preventDefault();

    if (!name || !bank || !account || !address1 || !address2 || !city || !country || !zip){
      alert("All the input fields are required");
      return;
    }

    try {
      const res = await fetch('/database/topic', {
        method: "POST",
        headers:{
          "content-type": "application.json",
        },
        body: JSON.stringify({name, bank, account, address1,address2,city,country,zip}),
      });
      if (res.ok){
        router.push('/');
        router.refresh();
      }else{
        throw new Error("failed to create a vendor")
      }
    } catch (error) {
      console.log(error)
    }
  }; 
  return (
    <form onSubmit={haldlesubmit} className="flex flex-col gap-3">
        <input
        onChange={(e)=>setname(e.target.value)}
        value={name}
        type="text" placeholder="Vendor name" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>

        <div className="flex gap-2">
            <input
            onChange={(e)=>setbank(e.target.value)}
            value={bank}
            type="text" placeholder="Bank name"  className="border-2 border-slate-400 px-5 py-2   rounded-md w-full"/>
            <input
            onChange={(e)=>setaccount(e.target.value)}
            value={account}
            type="number" placeholder="Account number"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
        </div>

        <input
        onChange={(e)=>setaddress1(e.target.value)}
        value={address1}
        type="text" placeholder="Address line-1" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>
        <input
        onChange={(e)=>setaddress2(e.target.value)}
        value={address2}
        type="text" placeholder="Address line-2" className="border-2 border-slate-400 px-5 py-2 rounded-md"/>

        <div className="flex gap-2">
            <input
            onChange={(e)=>setcity(e.target.value)}
            value={city}
            type="text" placeholder="City"  className="border-2 border-slate-400 px-5 py-2   rounded-md w-full"/>
            <input
            onChange={(e)=>setcountry(e.target.value)}
            value={country}
            type="text" placeholder="Country"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
            <input
            onChange={(e)=>setzip(e.target.value)}
            value={zip}
            type="number" placeholder="Zip code"   className="border-2 border-slate-400 px-5 py-2    rounded-md w-full"/>
        </div>

        <button type="submit" className="bg-green-500 text-white font-bold py-3 px-6 rounded-md sm:w-fit w-full">Add Vendor</button>
    </form>
  )
}

export default AddVendor