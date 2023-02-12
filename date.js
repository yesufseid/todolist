

module.exports.getdata=getdata;
function getdata() {

        
  
    const today=new Date();
   let options={
    weekday:"long",
    day:"numeric",
    month:"long"
   }
  let day=today.toLocaleDateString("en-US",options)
  return day

}
module.exports.getday=getday;
function getday() {

        
  
    const today=new Date();
   let options={
   
    weekday:"long"
   
   }
  let day=today.toLocaleDateString("en-US",options)
  return day

}



