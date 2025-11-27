import gender from "@/data/gender.json";
import { genderSchema } from "./schemas";

const parsedGender = genderSchema.parse(gender);

export function getGenderDataset() {
  return parsedGender;
}

