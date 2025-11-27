import { NextResponse } from "next/server";
import type { NextResponseInit } from "next/server";
import type { ZodTypeAny } from "zod";

export function respondWith<TSchema extends ZodTypeAny>(
  schema: TSchema,
  data: unknown,
  init?: NextResponseInit
) {
  const parsed = schema.parse(data);
  return NextResponse.json(parsed, init);
}

export function handleRouteError(error: unknown) {
  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
}

