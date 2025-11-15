import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "Rajkumar_Resume.pdf");
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=Rajkumar_Resume.pdf",
      },
    });
  } catch (error) {
    return new NextResponse("Resume not found", {
      status: 404,
    });
  }
}
