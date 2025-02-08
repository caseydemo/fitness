import mongoose from "mongoose";
import Exercise from '../model/Exercise'

async function dbConnect() {
  const connString = process.env.MONGO_URL;
  if (connString) {
    console.log('dbConnect...')
    // @ts-ignore - this is there for some reason ts can't find it
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } else {
    console.error("farts")
  }
}

export function checkDb() {
  try {
    dbConnect();
  } catch (error) {
    console.error("db conn failed: ", error);
  }
}


export async function insertOne() {
    try {
        await dbConnect()
        const test = new Exercise({name: "poop", description: "peep"})
            await test.save().then(() => {console.log('exercise saved')}).catch((err: any) => {console.error('error:', err)})
    } catch (error) {
        console.error('error', error)   
    }

}
