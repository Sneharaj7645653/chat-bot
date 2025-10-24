import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';

dotenv.config();

const app = express();


//importing routes
import userRoutes from "./routes/userRoutes.js";


//using routes
app.use("/api/user", userRoutes);



const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});