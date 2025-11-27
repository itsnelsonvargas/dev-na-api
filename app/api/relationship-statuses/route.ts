import { getRelationshipStatuses } from "@/lib/reference-service";
import { respondWith } from "@/lib/response";
import { relationshipStatusSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(relationshipStatusSchema.array(), getRelationshipStatuses());
}

