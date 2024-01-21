import mongoose from "mongoose";

const connectDB =(url)=>{
    try {
        mongoose.connect(url);
    
        console.log("Database Connected");
      } catch (error) {
        console.error(`Something went wrong. Check your Database: ${error}`);
      }
    
}
export default connectDB


