import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
   name: { type: String },
   email: { type: String },
   password: { type: String },
   contact: { type: String },
   address: { type: String },
   profile: { type: String },
   userType: { type: String, default: 'user' },
   createAt: { type: Date, default: Date.now() },
   updateAt: { type: Date, default: Date.now() },
})

export const userModel = mongoose.model('users', userSchema);

const NewsSchema = new mongoose.Schema({
   title: { type: String },
   category: { type: String },
   city: { type: String },
   type: { type: String },
   url: { type: String },
   desc: { type: String },
   userId: { type: String },
   isApproved: { type: Boolean, default: false },
   createAt: { type: Date, default: Date.now() },
   updateAt: { type: Date, default: Date.now() },
})

export const newsModel = mongoose.model('news', NewsSchema);

const ContactSchema = new mongoose.Schema({
   name: { type: String },
   email: { type: String },
   phone: { type: String },
   message: { type: String }, 
   createAt: { type: Date, default: Date.now() },
   updateAt: { type: Date, default: Date.now() },
})
export const contactUsModel=mongoose.model('contacts',ContactSchema)
