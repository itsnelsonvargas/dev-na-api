import reference from "@/data/reference.json";
import relationshipStatuses from "@/data/relationship_statuses.json";
import { referenceSchema, relationshipStatusSchema } from "./schemas";

const parsedReference = referenceSchema.parse(reference);
const parsedRelationshipStatuses = relationshipStatusSchema
  .array()
  .parse(relationshipStatuses);

export function getReferenceValues() {
  return parsedReference;
}

export function getRelationshipStatuses() {
  return parsedRelationshipStatuses;
}

