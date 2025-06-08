'use client'
import { useEffect, useState } from "react";

type Comment = { id: string; content: string; author?: { email?: string } };

export default function TestPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("/api/comments")
      .then(res => res.json())
      .then(setComments);
  }, []);

  const handlePostComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        content: "Test comment from UI",
        authorId: "user-id-123",
        segmentId: "segment-id-456",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const newComment = await res.json();
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Comment Test</h1>
      <button
        onClick={handlePostComment}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Post Comment
      </button>

      <ul className="list-disc ml-6">
        {comments.map((c: Comment) => (
          <li key={c.id}>{c.content} – {c.author?.email}</li>
        ))}
      </ul>
    </div>
  );
}
