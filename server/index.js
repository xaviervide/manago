import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`🚀 Server up and running on port ${port}`);
})