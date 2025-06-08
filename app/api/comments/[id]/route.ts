import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const updated = await prisma.comment.update({
    where: { id: params.id },
    data: {
      content: data.content,
      // Optionally update authorId or segmentId
    },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.comment.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ success: true });
}
