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
  const tag = await prisma.tag.create({
    data: { name: body.name },
  });
  return NextResponse.json(tag);
}

export async function GET() {
  const tags = await prisma.tag.findMany();
  return NextResponse.json(tags);
}
