import express from 'express';
import { userModel, newsModel,contactUsModel } from '../models/table.js';

const router = express.Router();

router.post('/user-register', async (req, res) => {
   try {
      const { name, email, password, contact, address } = req.body;
      const { profile } = req.files;

      profile.mv("uploads/" + profile.name, (err) => {
         if (err) {
            res.json({
               code: 400,
               message: "Failed File Upload!",
               data: ''
            })
         }
      });

      const isExist = await userModel.findOne({ email });
      if (isExist) {
         // return res.send("user already exist");
         res.json({
            code: 400,
            message: "User already exist!",
            data: isExist
         })
      } else {

         const data = new userModel({ name, email, password, contact, address, profile: profile.name });

         const result = await data.save();
         res.json({
            code: 200,
            message: "User registered successfully!",
            data: result
         })
      }


   } catch (error) {
      res.send("Something went wrong");
   }
});

router.put('/user-update', async (req, res) => {
   try {
      const { name, email, password, contact, address, _id } = req.body;
      const { profile } = req.files;
      profile.mv("uploads/" + profile.name, (err) => {
         if (err) {
            res.json({
               code: 400,
               message: "Failed File Upload!",
               data: ''
            })
         }
      });
      const resutl = await userModel.findByIdAndUpdate({ _id }, { name, email, password, contact, address, profile: profile?.name }, { new: true })
      if (resutl) {
         res.json({
            code: 200,
            message: "Profile Updated successfully..",
            data: resutl
         })
      } else {

         res.json({
            code: 400,
            message: "Profile Update Failed.",
            data: ''
         })
      }
   } catch (err) {
      res.json({
         code: 500,
         message: "internal server error",
         data: ""
      });
   }

})

router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email, password });

      if (result) {
         res.json({
            code: 200,
            message: "Login Successfully....",
            data: result
         });
      } else {
         res.json({
            code: 400,
            message: "invalid credentials",
            data: ""
         });
      }
   } catch (error) {
      res.json({
         code: 500,
         message: "internal server error",
         data: ""
      });
   }
});

router.post('/add-news', async (req, res) => {
   try {
      const { title, category, city, type, url, desc, userId } = req.body;
      const isExist = await newsModel.findOne({ title });
      if (isExist) {
         res.json({
            code: 400,
            message: "Title Already Exist.",
            data: isExist
         })
      } else {
         const data = new newsModel({ title, category, type, city, url, desc, userId });
         const result = await data.save();
         res.json({
            code: 200,
            message: "News Added Successfully.",
            data: result
         })
      }
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
router.get("/user-your-news", async (req, res) => {
   try {
      const { userId } = req.query;
      const result = await newsModel.find({ userId }).sort({ createAt: -1 });
      res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      })
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
router.get("/all-approved-news", async (req, res) => {
   try {
      const result = await newsModel.find({ isApproved: true }).sort({ createAt: -1 });
      res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      })
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.get("/admin-all-list", async (req, res) => {
   try {
      const result = await newsModel.find().sort({ createAt: -1 });
      res.json({
         code: 200,
         message: "Data fetched succeessfully..",
         data: result
      })
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.put("/admin-news-approved", async (req, res) => {
   try {
      const { _id, isApproved } = req.body;
      const result = await newsModel.findByIdAndUpdate({ _id }, { isApproved }, { new: true });
      if (result) {
         res.json({
            code: 200,
            message: "Updated succeessfully..",
            data: result
         })
      } else {
         res.json({
            code: 400,
            message: "Updated Failed.",
            data: result
         })
      }
   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.get('/top-ten-news', async (req, res) => {
   try {
      const result = await newsModel.find({ type: "image", isApproved: true }).sort({ createAt: -1 }).limit(10);
      res.json({
         code: 200,
         message: "Data fetched successfully",
         data: result
      })

   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.get('/top-category', async (req, res) => {
   try {
      const result = await newsModel.find({ type: "image", isApproved: true }).sort({ createAt: -1 })
      const seen = new Set();
      const uniqueArray = result?.filter((item) => {
         if (!seen.has(item?.category)) {
            seen.add(item?.category)
            return true;
         }
         return false
      }).slice(0,6)
      res.json({
         code: 200,
         message: "Data fetched successfully",
         data: uniqueArray
      })

   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
router.get('/top-city', async (req, res) => {
   try {
      const result = await newsModel.find({ type: "image", isApproved: true }).sort({ createAt: -1 }).limit(6)
      const seen = new Set();
      const uniqueArray = result?.filter((item) => {
         if (!seen.has(item?.city)) {
            seen.add(item?.city)
            return true;
         }
         return false
      })
      res.json({
         code: 200,
         message: "Data fetched successfully",
         data: uniqueArray
      })

   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})

router.get('/top-video', async (req, res) => {
   try {
      const result = await newsModel.find({ type: "video", isApproved: true }).sort({ createAt: -1 }); 
     
      res.json({
         code: 200,
         message: "Data fetched successfully",
         data: result
      })

   } catch (err) {
      res.json({
         code: 500,
         message: "Internal Server Error",
         data: ""
      })
   }
})
router.post('/delete-news',async(req,res)=>{
   const {_id}=req.body;
   const result=  await newsModel.findByIdAndDelete({_id:_id});
    if(result){
      res.json({
         code:200,
         message:"News Deleted Successfully",
         data:result
      })
    }else{
      res.json({
         code:400,
         message:"News Deleted failed",
         data:result
      })
    }
})
router.post('/add-contact-us',async(req,res)=>{
   const {name,email,phone,message}=req.body; 
   const data=new contactUsModel({name,email,phone,message});
    const result=await data.save();
    if(result){
      res.json({
         code:200,
         message:"Save successfully.",
         data:result
      })
    }else{
      res.json({
         code:400,
         message:"Save failed!.",
         data:''
      })
    }
})
router.get('/get-contact-us',async(req,res)=>{ 
    
    const result=await contactUsModel.find();
    if(result){
      res.json({
         code:200,
         message:"Data fetched successfully.",
         data:result
      })
    }else{
      res.json({
         code:400,
         message:" failed!.",
         data:''
      })
    }
})

export default router;
