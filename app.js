const express=require("express");
const bodyparesr=require("body-parser");
const app=express();
app.use(bodyparesr.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const data=require(__dirname +"/date.js")
const mongoose=require("mongoose")
mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://seidyesuf:yesuf123@cluster0.esxcnyl.mongodb.net/todolistdb",{useNewUrlParser:true})
const todolistSchema=new mongoose.Schema({
   name:String,
   rout:String
})
//mongodb://127.0.0.1:27017
const Name=mongoose.model("Name",todolistSchema)

//const daysofaweek=["senday","monday","tusday","wensday","tursday","friday","saturday"];
const good=new Name({
   name:"this is agood day"
}) 
const nice=new Name({
   name:"have nice day"
}) 
const wellcom=new Name({
   name:"wellcom"
}) 
const defoltlist=[good,nice,wellcom]
// Name.insertMany(defoltlist,function(err){
//    if(err){
//       console.log(err);
//    }else {
//       console.log("succsss");
//    }
// })
// const worklistSchema=new mongoose.Schema({
//    name:String,
//    names:todolistSchema
// })
// const List=new mongoose.model("List",worklistSchema);



app.get("/:routs",function(req,res){
    let day=data.getdata()
    const list=req.params.routs
    Name.find({rout:list},function(err,names){
      res.render('list.ejs', {listTitle:list ,newitems:names});
      
    })
    
})
 
// app.get("/:routs",function(req,res){
//    const list=req.params.routs
//  res.render("list.ejs",{listTitle:list,newitems:defoltlist})
// })

// app.post("/work",function(req,res){
//     let newitem=req.body.text

//     workitems.push(newitem)
//     res.redirect("/work")
// }

app.post("/",function(req,res){
 let item=req.body.text
 let routs=req.body.button
      const name=new Name({
         name:item,
         rout:routs
      });
      name.save();
      
    res.redirect("/" + routs)

})

app.post("/delete",function(req,res){
   //console.log(req.body.checkbox);
  
  Name.deleteOne({name:req.body.checkbox},function(err){
   if(err){
      console.log(err);
   }else{
      res.redirect("/"+ req.body.hidden)
   }
  })
})






const port=process.env.PORT || 3000 ;

app.listen(port ,function(){
    console.log("the server is working on port 3000");
})