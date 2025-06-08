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
  const pair = await prisma.languagePair.create({
    data: {
      sourceLang: body.sourceLang,
      targetLang: body.targetLang,
    },
  });
  return NextResponse.json(pair);
}

export async function GET() {
  const pairs = await prisma.languagePair.findMany();
  return NextResponse.json(pairs);
}
