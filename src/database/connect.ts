import mongoose from 'mongoose';
require('dotenv').config();


async function connect(){
  const { DATABASE } = process.env;
  const dblink = `${DATABASE}`;

  mongoose.set('strictQuery', true);

  try {
        await mongoose.connect(dblink);
        return console.log("database conncected");
    } catch (error: any) {
        return console.log(error);
    }
}
export default connect;
