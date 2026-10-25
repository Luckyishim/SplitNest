import { configDotenv } from 'dotenv';
import { express } from 'express';

const app = express();
configDotenv();

app.get("/", (req, res)=>{
res.send("Starting server")
})