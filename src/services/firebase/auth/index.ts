import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

async function signIn(): Promise<void> {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

function signOutUser(): void {
  void signOut(getAuth());
}

function initFirebaseAuth() {
  // Subscribe to the user's signed-in status & listen to auth state changes
  onAuthStateChanged(getAuth(), authStateObserver);
}

function getUserName(): string | null | undefined {
  return getAuth().currentUser?.displayName;
}

function getUserId() {}
