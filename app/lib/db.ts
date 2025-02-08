import mongoose from "mongoose";


async function dbConnect() {
    const connString = process.env.MONGO_URL;
    if(connString) {
        // @ts-ignore - this is there for some reason ts can't find it
        mongoose.connect(process.env.MONGO_URL);
    }
}


export function checkDb() {
    try {
        dbConnect()
        console.log('connected to db')
    } catch (error) {
        console.error("db conn failed: ", error)
    }
}