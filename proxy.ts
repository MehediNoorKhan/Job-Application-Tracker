import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function proxy(request: NextRequest) {
 const session = await getSession()

    const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
    if(isDashboardPage && !session?.user){
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    
    const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
    if(isSignInPage && session?.user){
        return NextResponse.redirect(new URL("/sign-up", request.url));
    }

    return NextResponse.next();
}
