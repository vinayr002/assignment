import EditVendor from "@/components/EditVendor"

const getTopicById =  async(id)=>{
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/database/topic/${id}`,{
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch data")
    }
    return res.json();
  } catch (error) {
    console.log(error)
  }
}
export default async function EditTopic({params}){
  const {id}= params;
  const {topic}= await getTopicById(id)
  const {name, bank, account, address1, address2, city, country, zip}= topic;
  return (
    <EditVendor id={id} name={name} bank={bank} account={account} address1={address1} address2={address2} city={city} country={country} zip={zip} />
  )
}

