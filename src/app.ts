import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { Server } from './server';
import connect from './database/connect';
dotenv.config()

const port = process.env.PORT || 5000;
const app = Server();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "welcome!" });
});

app.listen(port, async () => {
    console.log("running on localhost:5000");
    await connect();
})
