type RateBucket = {
  tokens: number;
  expiresAt: number;
};

const rateStore = new Map<string, RateBucket>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;

export function enforceRateLimit(key: string) {
  const now = Date.now();
  const bucket = rateStore.get(key);

  if (!bucket || bucket.expiresAt < now) {
    rateStore.set(key, { tokens: 1, expiresAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.tokens >= MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((bucket.expiresAt - now) / 1000) };
  }

  bucket.tokens += 1;
  rateStore.set(key, bucket);
  return { ok: true };
}

