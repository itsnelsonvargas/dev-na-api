import courses from "@/data/courses.json";
import { courseSchema, educationSchema } from "./schemas";

const parsedEducation = educationSchema.parse(courses);

export function getEducationDataset() {
  return parsedEducation;
}

export function getCourses() {
  return courseSchema.array().parse(parsedEducation.collegeCourses);
}

