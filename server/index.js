import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb://0.0.0.0:27017/posts';
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))
//   )
//   .catch((err) => console.log('failed', err));

// mongoose.set('useFindAndModify', false);
app.listen(5000, console.log('connected to 5000'));
