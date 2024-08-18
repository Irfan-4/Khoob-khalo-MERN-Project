import mongoose from "mongoose";

export const connectDB =async()=>{
    // await mongoose.connect('mongodb+srv://irfan04mohd:G7Y59QU5bHbdiSPM@cluster0.guqdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected"));
    await mongoose.connect('mongodb://127.0.0.1:27017/KhoobKhalo').then(()=>console.log("DB connected"));
}