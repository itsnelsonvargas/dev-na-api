import { getCourses } from "@/lib/education-service";
import { respondWith } from "@/lib/response";
import { courseSchema } from "@/lib/schemas";

export const revalidate = 3600;

export function GET() {
  return respondWith(courseSchema.array(), getCourses());
}

