import { getHealthDataset } from "@/lib/health-service";
import { respondWith } from "@/lib/response";
import { healthSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(healthSchema, getHealthDataset());
}

