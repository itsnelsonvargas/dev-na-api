import psgc from "@/data/psgc.json";
import {
  barangaySchema,
  citySchema,
  psgcSchema,
  provinceSchema,
  regionSchema,
} from "./schemas";

const parsedPsgc = psgcSchema.parse(psgc);

export function getPsgcDataset() {
  return parsedPsgc;
}

export function getRegions() {
  return regionSchema.array().parse(parsedPsgc.regions);
}

export function getProvinces() {
  return provinceSchema.array().parse(parsedPsgc.provinces);
}

export function getCities() {
  return citySchema.array().parse(parsedPsgc.cities);
}

export function getBarangays() {
  return barangaySchema.array().parse(parsedPsgc.barangays);
}

