import type { NextRequest } from "next/server";

export function getClientIp(request: NextRequest) {
  const header =
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip") ??
    undefined;

  if (!header) {
    return undefined;
  }

  return header.split(",")[0]?.trim();
}

