# developer-na-api

Serverless API that gives Philippine developers a single source of truth for commonly requested reference datasets. Built with Next.js 15 App Router, deployed easily on Vercel, and backed by JSON files that can later be swapped for a real database.

## Purpose
- Centralize PSGC fragments, reference dropdowns, and education lists in one API.
- Provide a safe suggestion endpoint so visitors can request new datasets.
- Keep architecture simple (JSON first) but migration-ready for any database.

## Stack
- Next.js 15 (App Router) + TypeScript
- Data stored in `/data/*.json`
- Route logic delegated to `/lib` services for easy re-use
- Validation powered by Zod on every response and request body
- Vercel-ready serverless handlers (one folder per endpoint)

## Endpoints
- `GET /api/psgc` – complete PSGC snapshot (regions, provinces, cities, barangays)
- `GET /api/psgc/regions`
- `GET /api/psgc/provinces`
- `GET /api/psgc/cities`
- `GET /api/psgc/barangays`
- `GET /api/gender`
- `GET /api/relationship-statuses`
- `GET /api/courses`
- `GET /api/education`
- `GET /api/reference`
- `GET /api/health`
- `POST /api/suggestions`

All GET endpoints export `revalidate = 3600` for one-hour caching in Vercel’s data cache layer.

## Project structure
```
app/               # App Router, API routes under app/api/*
data/              # JSON datasets and suggestion storage
lib/               # Data services, validation schemas, helpers
types/             # Re-exported TypeScript types for consumers
```

## Getting started
```bash
npm install
npm run dev
```

Visit `http://localhost:3000/api/psgc` to confirm the API is online. All routes are fully typed, validated, and return JSON.

## Deploying to Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel init` inside this folder (or import the repo in the Vercel dashboard).
3. `vercel dev` for local testing with Vercel environment.
4. `vercel --prod` to deploy. No build settings need to be changed; the defaults (`npm run build`) work out of the box.

## Example requests
```bash
# Fetch every PSGC node
curl https://your-vercel-domain.vercel.app/api/psgc

# Fetch general reference values
curl https://your-vercel-domain.vercel.app/api/reference

# Submit a dataset suggestion
curl -X POST https://your-vercel-domain.vercel.app/api/suggestions \
  -H "Content-Type: application/json" \
  -d '{"type":"dataset","message":"Please add PhilHealth branch list","contact":"you@example.com"}'
```

## Migrating to a real database
- Replace the helpers in `/lib/*-service.ts` with DB queries (Prisma, Drizzle, Supabase, etc.).
- Swap `/lib/suggestion-store.ts` with your preferred data layer while retaining the same interface (`addSuggestion`, `readSuggestions`).
- Keep Zod schemas as the single source of truth so route handlers and future clients stay type-safe.

"# dev-na-api" 
