import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const ts         = process.env.TS;
const privateKey = process.env.PRIVATE_KEY;
const apikey     = process.env.PUBLIC_KEY; console.log(process.env.TS);
const hash       = crypto.createHash('md5').update(ts + privateKey + apikey).digest('hex');

export default axios.create({
    baseURL: 'http://gateway.marvel.com',
    params: {
        ts,
        apikey,
        hash
    }
});