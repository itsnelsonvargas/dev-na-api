const STRIP_PATTERN = /[<>]/g;

export function sanitizeInput(value: string) {
  return value.replace(STRIP_PATTERN, "").trim();
}

