import Gig from '../models/gigsModel.js'
import asyncHandler from 'express-async-handler';



const Getgigs = asyncHandler(async(req,res)=>{
    const gigs = await Gig.find({})
    res.json(gigs)
})
const getgigsbyuser = asyncHandler(async(req,res)=>{
    const userid = req.params.userid
    const gigs = await Gig.find({user:`${userid}`})
    if(gigs){
        res.json(gigs)
    }
    else{
        res.status(404)
        throw new Error('gig not found')
    }
})

const addgig = asyncHandler(async(req,res)=>{
    const {title, categoryone, categorytwo, servicetype,metadata,serchtag,pkgname,pkgdiscription,deliverytime,numofpages,numogproducts,customization,reponsivedesign,contentupload,revision,price,image,user} = req.body;
const gig = await Gig.create({
    title, categoryone, categorytwo, servicetype,metadata,serchtag,pkgname,pkgdiscription,deliverytime,numofpages,numogproducts,customization,reponsivedesign,contentupload,revision,price,image,user
})
if(gig) {
    res.json(gig)
}
else{
    res.status(400)
    throw new Error('invalid data')
} 
})
export {Getgigs,getgigsbyuser,addgig}