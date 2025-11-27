import { getRegions } from "@/lib/psgc-service";
import { respondWith } from "@/lib/response";
import { regionSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(regionSchema.array(), getRegions());
}

