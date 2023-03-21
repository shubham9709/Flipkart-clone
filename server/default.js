
import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";
 const DefaultData=async ()=>{
  try{
    
    await Product.insertMany(products);
    console.log("Successfully imported the data");
  }
  catch(error)
  {
    console.log("Error in inserting in database",error.message);
  }
 }
 export default DefaultData;