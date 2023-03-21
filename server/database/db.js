import mongoose from "mongoose";

mongoose.set('strictQuery', false);
export const Connection = async () => {
  const URL='mongodb+srv://user:username@cluster0.cmcz7wq.mongodb.net/?retryWrites=true&w=majority';
  try{
    await mongoose.connect(URL,{useNewUrlParser:true});
    console.log("Successsfully connected to the database");
  }
  catch(error){
    console.log("Unable to connect to the database" , error.message);
  }
}
export default Connection;

// mongodb://127.0.0.1:27017/todolistDB