// import mongoose from "mongoose"

// export default async function connectMongoDB() {
  
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("connected")
//     } catch (error) {
//         console.log("error")
//     }
  
// }

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;