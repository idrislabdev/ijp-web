import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/@core/libs/auth";

const AUTH_PAGES = ["/xadmin/login", "/xadmin"];

const isAuthPages = (url:any) => AUTH_PAGES.some((page) => page.startsWith(url));

export async function middleware(request:any) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  // if (nextUrl.pathname === '/xadmin/logout') {
  //   console.log('nextUrl.pathname.logout')
  //   const response = NextResponse.redirect(new URL(`/xadmin/login`, url));
  //   response.cookies.set({
  //     name: "token",
  //     value: '',
  //     path: "/xadmin",
  //   });

  //   return response;
  // }

  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }

    const response = NextResponse.redirect(new URL(`/xadmin/home`, url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    const response = NextResponse.redirect(
      new URL(`/xadmin/login?${searchParams}`, url)
    );
    response.cookies.delete("token");

    return response;
  }
  
  return NextResponse.next();
}

export const config = { matcher: ["/xadmin/:path*"] };
