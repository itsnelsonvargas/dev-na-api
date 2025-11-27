import { getReferenceValues } from "@/lib/reference-service";
import { respondWith } from "@/lib/response";
import { referenceSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(referenceSchema, getReferenceValues());
}

