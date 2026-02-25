import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
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
          <Link href="/sign-in">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              variant="outline"
              size="sm"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
