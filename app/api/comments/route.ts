import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/api/auth/[...nextauth]";

// GET all comments (public)
export async function GET() {
  const comments = await prisma.comment.findMany({
    include: { author: true, segment: true },
  });
  return NextResponse.json(comments);
}

// POST a new comment (protected)
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();
  const comment = await prisma.comment.create({
    data: {
      content: data.content,
      authorId: session.user.id,
      segmentId: data.segmentId,
    },
  });
  return NextResponse.json(comment);
}

// You can add PUT, DELETE, etc. as needed, each as a function