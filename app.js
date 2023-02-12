const express=require("express");
const bodyparesr=require("body-parser");
const app=express();
app.use(bodyparesr.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const data=require(__dirname +"/date.js")

//const daysofaweek=["senday","monday","tusday","wensday","tursday","friday","saturday"];
let items=["buy food","cook food","eat food"]
let workitems=[]
app.get("/",function(req,res){
    let day=data.getdata()
     res.render('list.ejs', {listTitle: day ,newitems:items});
})
 
app.get("/work",function(req,res){
  res.render("list.ejs",{listTitle:"Work List",newitems:workitems})
})

// app.post("/work",function(req,res){
//     let newitem=req.body.text
   
//     workitems.push(newitem)
//     res.redirect("/work")
// })


app.post("/",function(req,res){
 let item=req.body.text
 if(req.body.button==="Work"){
   
    workitems.push(item)
    res.redirect("/work")
 } else {
    items.push(item)
    res.redirect("/")

 }
 


})










app.listen(3000 ,function(){
    console.log("the server is working on port 3000");
})