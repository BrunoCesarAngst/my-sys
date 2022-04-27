import { NextRequest, NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import parseUrl from "../../lib/parseUrl";

async function handle(req: NextRequest, _res: NextResponse) {
  const signInPage = "/singin";
  const errorPage = "/singin";
  const basePath = parseUrl(process.env.NEXTAUTH_URL).path;

  if (
    req.nextUrl.pathname.startsWith(basePath) ||
    [signInPage, errorPage].includes(req.nextUrl.pathname)
  ) {
    return;
  }

  const requestForNextAuth: any = {
    headers: {
      cookie: req.headers.get("cookie"),
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (session) {
    return NextResponse.next();
  }

  const signInUrl = new URL(signInPage, req.nextUrl.origin);
  return NextResponse.redirect(signInUrl);
}

export default handle;