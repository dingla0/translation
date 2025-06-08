// components/FirebaseAuthForm.tsx
"use client";

import { useEffect, useState } from "react";
import { User, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function FirebaseAuthForm() {
  const [user, setUser] = useState<User | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <div>
        <p>Signed in as {user.displayName}</p>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  }

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  );
}