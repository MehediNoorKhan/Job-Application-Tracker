"use client";
import { signOut } from "@/lib/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignOutBtn() {

const router = useRouter()

  return (
    <DropdownMenuItem  onClick={async () => {
        const result = await signOut();
        if(result.data){
          router.push("/sign-in");
        }else{
          toast.error(result.error?.message || "Failed to sign out");
        }
      }} className="cursor-pointer">
      Sign Out
    </DropdownMenuItem>
    
  );
}