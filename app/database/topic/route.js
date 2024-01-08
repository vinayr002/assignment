import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, bank, account, address1, address2, city, country, zip} = await request.json();
    await connectMongoDB();
    await Topic.create({name, bank, account, address1, address2, city, country, zip});
    return NextResponse.json({message: "Vendor created" }, {status: 201})
}

export async function GET(){
    await connectMongoDB();
    const topic = await Topic.find();
    return NextResponse.json({topic})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"deleted"},{status: 200})
}