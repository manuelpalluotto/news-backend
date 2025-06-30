require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import newRoutes from './routes/news';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/news', newRoutes);

mongoose.connect(process.env.DATABASE_URL)
.then( () => app.listen(PORT, () => console.log(`Backend on Port ${PORT}`)))
.catch(error => console.error(error));