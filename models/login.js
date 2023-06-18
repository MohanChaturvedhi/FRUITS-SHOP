const mongoose  = require("mongoose");
const connectDB=async ()=>{
    try{
     const connect=await mongoose.connect('mongodb+srv://admin:admin@mohan.jxh8xre.mongodb.net/Fruits?retryWrites=true&w=majority');
     console.log("Database connected",
     connect.connection.host,
     connect.connection.name
     );
     
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
connectDB();
const UserSchema=new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('User',UserSchema);