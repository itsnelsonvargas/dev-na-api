import { getBarangays } from "@/lib/psgc-service";
import { respondWith } from "@/lib/response";
import { barangaySchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(barangaySchema.array(), getBarangays());
}

