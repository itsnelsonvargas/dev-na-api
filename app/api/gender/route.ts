import { getGenderDataset } from "@/lib/gender-service";
import { respondWith } from "@/lib/response";
import { genderSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(genderSchema, getGenderDataset());
}

