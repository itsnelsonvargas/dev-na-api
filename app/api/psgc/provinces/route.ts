import { getProvinces } from "@/lib/psgc-service";
import { respondWith } from "@/lib/response";
import { provinceSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(provinceSchema.array(), getProvinces());
}

