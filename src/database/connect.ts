import mongoose from 'mongoose';
require('dotenv').config();

export async function connect(){
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

export async function closeDatabase() {
  try {
    await mongoose.connection.close();
    console.log('database connection closed.')
  } catch (error: any) {
    console.error('error closing database: ', error);
  }  
}

export default connect;
