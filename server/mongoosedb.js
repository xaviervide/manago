import mongoose from "mongoose";

const mongoURL = 'mongodb+srv://xavitest:abcd1234efgh@cluster0.pnlq3gt.mongodb.net/manago';

mongoose.connect(mongoURL)
  .then(() => console.log('🍃 Connected to MongoDB!'))

export default mongoose;