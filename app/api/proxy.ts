import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function proxy(request: NextRequest) {


    const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
    const session = await getSession()
    if(!session?.user){
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    return NextResponse.next();
}
