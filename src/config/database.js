import mongoose from "mongoose";

export const connectDb = async () =>
  await mongoose.connect(
    "mongodb+srv://supreeth:SupreethPyMongoDb@namastedev.yfcgl.mongodb.net/devTinder"
  );
