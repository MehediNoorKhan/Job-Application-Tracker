

"use client"
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutBtn from "./sign-out-btn";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {

  const { data:  session  } = useSession();

  return (
    <div className=" border-b border-gray-200 bg-white ">
      <nav className=" container mx-auto flex items-center justify-between h-16">
        <div className=" flex flex-row  h-16 items-center px-4">
         <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold text-primary"
          >
            <Briefcase className="inline-block mr-2" />
            Job Tracker
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <>
            <Link href="/dashboard">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-700 bg-secondary hover:text-black transition-colors cursor-pointer"
            >
              Dashboard
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white cursor-pointer">
               <Avatar>
                <AvatarFallback className="bg-primary text-white text-lg">{session.user?.name?.[0].toUpperCase()}</AvatarFallback>
               </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <p className="text-sm">{session.user?.name}</p>
                  <p className="text-xs text-gray-500">{session.user?.email}</p>
                </div>
              </DropdownMenuLabel>
              <SignOutBtn />
            </DropdownMenuContent>
          </DropdownMenu>
            </>
          ) : (<>
          <Link href="/sign-in">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-700 bg-secondary hover:text-black transition-colors cursor-pointer"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              variant="outline"
              size="sm"
              className="text-sm text-white bg-primary hover:text-black hover:bg-primary/10 transition-colors cursor-pointer"
            >
              Sign Up
            </Button>
          </Link>
          </>
          )}
        </div>
      </nav>
    </div>
  );
}
