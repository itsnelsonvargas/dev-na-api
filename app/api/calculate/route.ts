import { NextRequest, NextResponse } from "next/server";
import { calculateCost } from "@/app/lib/costCalculator";
import { estimatorFormSchema } from "@/app/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = estimatorFormSchema.parse(body);

    // Business rule validation: API integration requires a database
    if (validatedData.apiIntegration && validatedData.database === "none") {
      return NextResponse.json(
        { error: "API integration requires a database to be selected" },
        { status: 400 }
      );
    }

    // Business rule validation: API documentation requires a database
    if (validatedData.apiDocumentation !== "none" && validatedData.database === "none") {
      return NextResponse.json(
        { error: "API documentation requires a database to be selected" },
        { status: 400 }
      );
    }

    const result = calculateCost(validatedData);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
}
