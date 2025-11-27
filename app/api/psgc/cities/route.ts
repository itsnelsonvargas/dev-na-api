import { getCities } from "@/lib/psgc-service";
import { respondWith } from "@/lib/response";
import { citySchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(citySchema.array(), getCities());
}

