import { z } from "zod";

export const regionSchema = z.object({
  code: z.string(),
  name: z.string(),
  islandGroup: z.string(),
});

export const provinceSchema = z.object({
  code: z.string(),
  name: z.string(),
  regionCode: z.string(),
});

export const citySchema = z.object({
  code: z.string(),
  name: z.string(),
  provinceCode: z.string(),
  regionCode: z.string(),
  type: z.string(),
  isHighlyUrbanized: z.boolean(),
});

export const barangaySchema = z.object({
  code: z.string(),
  name: z.string(),
  cityCode: z.string(),
  provinceCode: z.string(),
  regionCode: z.string(),
});

export const psgcSchema = z.object({
  regions: z.array(regionSchema),
  provinces: z.array(provinceSchema),
  cities: z.array(citySchema),
  barangays: z.array(barangaySchema),
});

export const sexOptionSchema = z.object({
  code: z.string(),
  label: z.string(),
});

export const genderSchema = z.object({
  sexOptions: z.array(sexOptionSchema),
  genderIdentities: z.array(sexOptionSchema),
  notes: z.array(z.string()),
});

export const relationshipStatusSchema = z.object({
  code: z.string(),
  label: z.string(),
});

export const courseSchema = z.object({
  code: z.string(),
  name: z.string(),
  commission: z.string(),
});

export const strandSchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const shsTrackSchema = z.object({
  code: z.string(),
  name: z.string(),
  strands: z.array(strandSchema),
});

export const tesdaQualificationSchema = z.object({
  code: z.string(),
  name: z.string(),
  status: z.string(),
});

export const educationSchema = z.object({
  collegeCourses: z.array(courseSchema),
  shsTracks: z.array(shsTrackSchema),
  tesdaQualifications: z.array(tesdaQualificationSchema),
});

export const referenceSchema = z.object({
  civilStatuses: z.array(z.string()),
  nationalities: z.array(z.string()),
  employmentTypes: z.array(z.string()),
  governmentDropdowns: z.object({
    idTypes: z.array(z.string()),
    agencyCodes: z.array(z.string()),
    incomeClasses: z.array(z.string()),
  }),
});

export const healthSchema = z.object({
  vaccinationStatuses: z.array(relationshipStatusSchema),
  philhealthMembershipTypes: z.array(z.string()),
  medicalConditions: z.array(z.string()),
});

export const suggestionTypeSchema = z.enum(["dataset", "correction", "request"]);

export const suggestionInputSchema = z.object({
  type: suggestionTypeSchema,
  message: z.string().min(5).max(2000),
  contact: z.string().email().or(z.string().max(160)).optional(),
});

export const suggestionRecordSchema = suggestionInputSchema.extend({
  timestamp: z.string().datetime(),
  ip: z.string().ip().optional(),
});

export const suggestionListSchema = z.array(suggestionRecordSchema);

export const suggestionResponseSchema = z.object({
  message: z.string(),
  data: suggestionRecordSchema,
});

export type Region = z.infer<typeof regionSchema>;
export type Province = z.infer<typeof provinceSchema>;
export type City = z.infer<typeof citySchema>;
export type Barangay = z.infer<typeof barangaySchema>;
export type PsgcDataset = z.infer<typeof psgcSchema>;
export type GenderDataset = z.infer<typeof genderSchema>;
export type RelationshipStatus = z.infer<typeof relationshipStatusSchema>;
export type Course = z.infer<typeof courseSchema>;
export type ShsTrack = z.infer<typeof shsTrackSchema>;
export type EducationDataset = z.infer<typeof educationSchema>;
export type ReferenceDataset = z.infer<typeof referenceSchema>;
export type HealthDataset = z.infer<typeof healthSchema>;
export type SuggestionInput = z.infer<typeof suggestionInputSchema>;
export type SuggestionRecord = z.infer<typeof suggestionRecordSchema>;

