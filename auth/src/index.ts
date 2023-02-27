import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  console.log('Starting up Digital Ocean');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URL,{});
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
    console.log('error to conect with MongoDb');
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
