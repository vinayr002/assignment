import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


export async function PUT(request, {params}){
    const {id} = params;
    const {newName: name, newBank : bank, newAccount :account, newAddress1: address1, newAddress2: address2, newCity: city, newCountry: country, newZip: zip} = await request.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {name, bank, account, address1, address2, city, country, zip });
    return NextResponse.json({message :"updated"},{status:200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status:200})
}