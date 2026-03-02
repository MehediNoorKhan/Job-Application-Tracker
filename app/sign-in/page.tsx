"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {

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
  
      const result = await signIn.email({email,password});
  
      if(result.error){
        setError(result.error.message ?? "Failed to sign in. Please try again.");
      }
      else{
        router.push("/");
      }
      
    }catch(error){
      setError("Failed to create an account. Please try again.");
    }finally{
      setLoading(false);
    }
    
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to get access to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            
            <div className="space-y-2 mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" minLength={6} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 mt-4">
            <Button type="submit" className="cursor-pointer self-start">{loading ? "Signing in..." : "Sign In"}</Button>
            <p>Don't have an account? <Link href="/sign-up">Sign Up</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
