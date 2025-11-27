import health from "@/data/health.json";
import { healthSchema } from "./schemas";

const parsedHealth = healthSchema.parse(health);

export function getHealthDataset() {
  return parsedHealth;
}

