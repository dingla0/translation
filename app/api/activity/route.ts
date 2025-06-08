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
  const log = await prisma.activityLog.create({
    data: {
      action: body.action,
      detail: body.detail,
      userId: session.user.id,
      segmentId: body.segmentId,
    },
  });
  return NextResponse.json(log);
}
