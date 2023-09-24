const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.connect('mongodb+srv://munir:db54xyz@cluster0.npvhtiy.mongodb.net/Quiz');
const QuestionSchema=new mongoose.Schema({
    
    q_id:Number,       //101
    question:String,   // Animalia belongs to which kingdom 

    opt1:String,
    opt2:String,
    opt3:String,
    opt4:String,

    answer:String,
    category:String,   //science
    sub_cat:String     //medical
});
const Question=mongoose.model('question',QuestionSchema);

// const insertdb=async ()=>{
//     let data= new Question({
//         q_id: 102,
//         question:"What is the primary purpose of accounting in business?",
//         opt1:"Marketing",
//         opt2:"Liablities",
//         opt3:"Revenue",
//         opt4:"Equity",
//         answer:"Revenue",
//         category:"gk",
//         sub_cat:"history"
//     });
//     const result=await data.save();
//     console.log(result);
//     console.log('done');
// }
// insertdb();
app.get("/",async (req,resp)=>{
    let  data=await Question.find();
resp.send(data);
});
app.listen(5000);
