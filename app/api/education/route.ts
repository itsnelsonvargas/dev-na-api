import { getEducationDataset } from "@/lib/education-service";
import { respondWith } from "@/lib/response";
import { educationSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(educationSchema, getEducationDataset());
}

