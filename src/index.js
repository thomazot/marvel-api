import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.get('/', (req, res) => res.send('Welcome to Marvel API'));


app.listen( process.env.PORT || 3000, () => console.log(`Server is listening port ${ process.env.PORT || 3000 } `) );