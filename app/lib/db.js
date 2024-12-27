import mongoose, { Mongoose } from "mongoose";
import User from "../model/User";
import Exercise from "../model/Exercise";
import Log from "../model/Log";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  try {
    if (global.mongoose && global.mongoose.conn) {
      console.log("Connected from previous");
      return global.mongoose.conn;
    } else {
      const conString = process.env.MONGO_URL;

      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Newly connected");
      return await promise;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};

export const getAllUsers = () => {
    dbConnect();
    return global.mongoose.conn.model("User").find();
};

export const getAllExercises = () => {
    dbConnect();
    return global.mongoose.conn.model("Exercise").find();
};

export const getAllLogs = () => {
    dbConnect();
    return global.mongoose.conn.model("Log").find();
};