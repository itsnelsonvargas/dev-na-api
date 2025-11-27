import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/ip";
import { enforceRateLimit } from "@/lib/rate-limit";
import { handleRouteError, respondWith } from "@/lib/response";
import {
  suggestionInputSchema,
  suggestionResponseSchema,
} from "@/lib/schemas";
import { addSuggestion } from "@/lib/suggestion-store";

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request) ?? "0.0.0.0";
    const rate = enforceRateLimit(ip);

    if (!rate.ok) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: rate.retryAfter
            ? { "Retry-After": String(rate.retryAfter) }
            : undefined,
        }
      );
    }

    const payload = suggestionInputSchema.parse(await request.json());
    const record = await addSuggestion(payload, ip);
    return respondWith(suggestionResponseSchema, {
      message: "Suggestion recorded. Thank you!",
      data: record,
    });
  } catch (error) {
    return handleRouteError(error);
  }
}

