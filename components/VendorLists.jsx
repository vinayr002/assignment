import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import Remove from "./Remove"

const getTopics = async () => {
    const apiUrl = process.env.URL;

    try {
        const res = await fetch(`http://localhost:3000/database/topic`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };


export default async function VendorLists(){
    const {topic} = await getTopics();
  return (
    <>
        {topic.map((v)=>(
            <div className="flex justify-between border border-slate-200 p-4 my-3 gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{v.name}</h2>
                    <div className="text-gray-500">
                      <p>{v.bank}</p>
                      <p>{v.account}</p>
                      <p>{v.address1}{v.address2}</p>
                      <p>{v.city}</p>
                      <p>{v.country}</p>
                      <p>{v.zip}</p>

                    </div>
                </div>
                <div className="flex gap-2">
                    <Remove id={v._id}/>
                    <Link href={`/editTopic/${v._id}`}>
                        <HiPencilAlt size={24}/> 
                    </Link>
                </div>
            </div>
        ))}
    </>
  )
}

