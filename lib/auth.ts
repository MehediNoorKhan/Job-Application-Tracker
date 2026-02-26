
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { betterAuth } from "better-auth";

const client = new MongoClient(process.env.MONGODB_URI!);
const database = client.db("job_tracker");

export const auth = betterAuth({
  database: mongodbAdapter(database),
  emailAndPassword: {
    enabled: true,
  },
});