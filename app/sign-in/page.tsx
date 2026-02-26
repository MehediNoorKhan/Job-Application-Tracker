import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">Sign In</CardTitle>
          <CardDescription>
            Enter your credentials to get access to your account
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            
            <div className="space-y-2 mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" minLength={6} required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 mt-4">
            <Button type="submit" className="cursor-pointer self-start">Sign In</Button>
            <p>Don't have an account? <Link href="/sign-up">Sign Up</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
