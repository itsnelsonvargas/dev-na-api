import { getPsgcDataset } from "@/lib/psgc-service";
import { respondWith } from "@/lib/response";
import { psgcSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(psgcSchema, getPsgcDataset());
}

