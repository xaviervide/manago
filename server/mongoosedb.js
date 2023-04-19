import 'dotenv/config';
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log('🍃 Connected to MongoDB!'))

export default mongoose;