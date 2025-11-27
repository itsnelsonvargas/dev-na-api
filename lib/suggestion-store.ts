import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  suggestionInputSchema,
  suggestionListSchema,
  suggestionRecordSchema,
} from "./schemas";
import type { SuggestionInput } from "@/types";
import { sanitizeInput } from "./sanitize";

const suggestionsPath = path.join(process.cwd(), "data", "suggestions.json");

export async function readSuggestions() {
  try {
    const contents = await readFile(suggestionsPath, "utf-8");
    return suggestionListSchema.parse(JSON.parse(contents));
  } catch (error) {
    if ((error as { code?: string }).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function addSuggestion(input: SuggestionInput, ip?: string) {
  const sanitizedPayload = suggestionInputSchema.parse({
    ...input,
    message: sanitizeInput(input.message),
    contact: input.contact ? sanitizeInput(input.contact) : undefined,
  });

  const record = suggestionRecordSchema.parse({
    ...sanitizedPayload,
    timestamp: new Date().toISOString(),
    ip,
  });

  const suggestions = await readSuggestions();
  suggestions.push(record);

  await writeFile(suggestionsPath, JSON.stringify(suggestions, null, 2));
  return record;
}

