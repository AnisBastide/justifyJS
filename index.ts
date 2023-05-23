import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import justify from "./justify";

dotenv.config();

const app: Express = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json?.()
const port = process.env.PORT;
const secretToken = process.env.SECRET ? process.env.SECRET : ''


app.get('/', (req: Request, res: Response) => {
    res.send('Bonjour');
});
app.post('/api/login',jsonParser,(req: Request<{email:string}>, res: Response) => {
    console.log(req.body)
    const email = req.body.email
    const token = jwt.sign({email},secretToken)
    res.send(token);
})

app.post('/api/justify',jsonParser,(req: Request<{token:string,text:string}>, res: Response) => {
   const decoded = jwt.verify(req.body.token,secretToken)
    if(decoded){
        const justified = justify(req.body.text,80)
        res.send(justified);
    }
})
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});