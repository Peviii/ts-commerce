import { Request, Response } from 'express';
import { Server } from 'node:http';
import process from 'node:process';
import dotenv from 'dotenv';
import { serverConnect } from './server';
import connect, { closeDatabase } from './database/connect';
dotenv.config()

const port = process.env.PORT || 5000;
const app = serverConnect();
let server: Server;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: "welcome!" });
});

server = app.listen(port, async () => {
  console.log("running on localhost:5000");
  await connect();
});

async function closeServer() {
  if (server) {
    return new Promise<void>((resolve) => {
    server.close(() => {
        console.log('HTTP server closed.');
        resolve();
      });
    });
  }    
}

  // graceful shutdown
function gracefulShutdown(event: string) {
  return async (code: any) => {
    console.log(`${event} received with ${code}`);
    await closeDatabase();
    await closeServer();
    process.exit(code);
  };
}
  
process.on('SIGINT', gracefulShutdown('SIGINT'));
process.on('SIGTERM', gracefulShutdown('SIGTERM'));
  
process.on('exit', (code) => {
  console.log('exit signal received', code);
});
