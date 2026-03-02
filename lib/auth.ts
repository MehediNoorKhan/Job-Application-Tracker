import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { betterAuth } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { initializeUserBoard } from "./models/init-user-board";
import "./models"; // Import all models to ensure they're registered

const client = new MongoClient(process.env.MONGODB_URI!);
const database = client.db("job_tracker");

export const auth = betterAuth({
  database: mongodbAdapter(database),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          if(user.id){
            await initializeUserBoard(user.id);
          }
        },
      },
    },
  },
});

export async function getSession() {
  const result = await auth.api.getSession({
    headers: await headers(),
  });
  return result;
}

export async function signOut(){
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if(result.success){
    redirect("/sign-in");
  }
  return result;
}