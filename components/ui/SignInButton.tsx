"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Sign in to your account</h2>
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
