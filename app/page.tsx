import Link from "next/link";

import courses from "@/data/courses.json";
import gender from "@/data/gender.json";
import health from "@/data/health.json";
import psgc from "@/data/psgc.json";
import reference from "@/data/reference.json";
import relationshipStatuses from "@/data/relationship_statuses.json";
import suggestions from "@/data/suggestions.json";

type DatasetEntry = {
  title: string;
  description: string;
  endpoints: string[];
  data: unknown;
};

const datasetEntries: DatasetEntry[] = [
  {
    title: "PSGC snapshot",
    description: "Regions, provinces, cities, and barangays for the Philippines.",
    endpoints: ["/api/psgc"],
    data: psgc,
  },
  {
    title: "Reference dropdowns",
    description: "Civil status, nationality, employment, and government ID lists.",
    endpoints: ["/api/reference"],
    data: reference,
  },
  {
    title: "Gender dataset",
    description: "Sex options, gender identities, and context notes.",
    endpoints: ["/api/gender"],
    data: gender,
  },
  {
    title: "Relationship statuses",
    description: "Standard labels for relationship status inputs.",
    endpoints: ["/api/relationship-statuses"],
    data: relationshipStatuses,
  },
  {
    title: "Education & courses",
    description: "CHED courses, SHS tracks, and TESDA qualifications.",
    endpoints: ["/api/education", "/api/courses"],
    data: courses,
  },
  {
    title: "Health references",
    description: "Vaccination statuses, PhilHealth membership types, and conditions.",
    endpoints: ["/api/health"],
    data: health,
  },
  {
    title: "Suggestion inbox",
    description: "Pending dataset suggestions submitted by the community.",
    endpoints: ["/api/suggestions"],
    data: suggestions,
  },
];

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">developer-na-api</h1>
        <p>
          This project exposes structured reference data commonly needed by
          Philippine developers. Deploy it to Vercel and start consuming the
          serverless API right away.
        </p>
        <p>
          Everything under <code>/data</code> is bundled into the API layer. The
          sections below surface the raw JSON so you can inspect what each route
          returns without leaving the homepage.
        </p>
      </section>

      <section className="space-y-6">
        {datasetEntries.map((entry) => (
          <article
            key={entry.title}
            className="space-y-3 rounded-lg border border-gray-200 p-4"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-medium">{entry.title}</h2>
              <p>{entry.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {entry.endpoints.map((endpoint) => (
                  <Link
                    key={endpoint}
                    href={endpoint}
                    className="rounded bg-gray-100 px-2 py-1 font-mono"
                  >
                    {endpoint}
                  </Link>
                ))}
              </div>
            </div>
            <pre className="overflow-x-auto rounded bg-black/90 p-4 text-sm text-white">
              {JSON.stringify(entry.data, null, 2)}
            </pre>
          </article>
        ))}
      </section>
    </main>
  );
}

