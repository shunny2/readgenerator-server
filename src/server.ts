import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './router';

import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 3333;
const ORIGIN_URL = process.env.ORIGIN_URL || '*';

app.use(cors({ origin: `${ORIGIN_URL}` }));
app.use(express.json());

app.use('/api/v1', router);

mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log('🔋 Database connected!')

    app.listen(PORT, () => {
        console.log(`🚀 Connected server on port: ${PORT}`)
    });
}).catch((err) => {
    console.log('Error connecting to database.')
    console.log(err)
})
