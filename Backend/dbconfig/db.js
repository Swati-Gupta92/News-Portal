import mongoose from 'mongoose';
export const dbconnect=async()=>{
   const com=await mongoose.connect("mongodb://localhost:27017/NewsPortal");
    if(com){
        console.log('dbconnected');
        
    }
}
