"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function SignUp() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [error,setError] = useState("");
const [loading,setLoading] = useState(false);

const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try{

    const result = await signUp.email({name,email,password});

    if(result.error){
      setError(result.error.message ?? "Failed to sign up. Please try again.");
    }
    else{
      router.push("/dashboard");
    }
    
  }catch(error){
    setError("Failed to sign up. Please try again.");
  }finally{
    setLoading(false);
  }
  
};

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">Sign Up</CardTitle>
          <CardDescription>
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {
              error && (
                <div className="rounded-md bg-destructive/15 text-destructive text-sm mb-4 p-3">
                  {error}
                </div>
              )
            }
            <div className="space-y-2 mb-4">
              <Label htmlFor="name">Name</Label>
              <Input onChange={(e)=>setName(e.target.value)} value={name} id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="space-y-2 mb-4">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e)=>setEmail(e.target.value)} value={email} id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input onChange={(e)=>setPassword(e.target.value)} value={password} id="password" type="password" placeholder="********" minLength={6} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 mt-4">
            <Button type="submit" className="cursor-pointer self-start" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</Button>
            <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
