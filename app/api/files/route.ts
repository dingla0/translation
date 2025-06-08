import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/api/auth/[...nextauth]";
import type { Session } from "next-auth";

export async function POST(req: Request) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const file = await prisma.fileUpload.create({
    data: {
      filename: body.filename,
      fileType: body.fileType,
      url: body.url,
      projectId: body.projectId,
    },
  });
  return NextResponse.json(file);
}

export async function GET() {
  const files = await prisma.fileUpload.findMany();
  return NextResponse.json(files);
}
