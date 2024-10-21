import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 获取当前路径
  const { pathname } = request.nextUrl;

  // 如果是根路径，重定向到 /home
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/film", request.url));
  }

  if(pathname==='/film') {
    return NextResponse.redirect(new URL("/film/commercial", request.url));
  }

  return NextResponse.next();
}

// 配置中间件匹配的路由
export const config = {
  matcher: ["/","/film"], // 只匹配根路径
};
