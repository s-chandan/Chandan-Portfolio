import { type NextRequest, NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

export async function GET(request: NextRequest) {
  try {
    // Path to your CV file
    const filePath = join(process.cwd(), "public", "cv", "resume.pdf")

    // Read the file
    const fileBuffer = readFileSync(filePath)

    // Create response with proper headers
    const response = new NextResponse(fileBuffer)

    response.headers.set("Content-Type", "application/pdf")
    response.headers.set("Content-Disposition", 'attachment; filename="Your_Name_CV.pdf"')
    response.headers.set("Cache-Control", "no-cache")

    return response
  } catch (error) {
    console.error("Error downloading CV:", error)
    return new NextResponse("CV not found", { status: 404 })
  }
}
