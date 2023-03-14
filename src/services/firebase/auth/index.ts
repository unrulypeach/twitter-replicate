import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface Iauth {
  signIn: () => Promise<void>;
  signOutUser: () => void;
  initFirebaseAuth: () => void;
  getUserName: () => string | null | undefined;
  getUserId: () => string | undefined;
  isUserSignedIn: () => boolean | undefined;
}

export default function auth(): Iauth {
  async function signIn(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  function signOutUser(): void {
    void signOut(getAuth());
  }

  function initFirebaseAuth(): void {
    // Subscribe to the user's signed-in status & listen to auth state changes
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  function getUserName(): string | null | undefined {
    return getAuth().currentUser?.displayName;
  }

  function getUserId(): string | undefined {
    return getAuth().currentUser?.uid;
  }

  function isUserSignedIn(): boolean | undefined {
    return !!getAuth().currentUser;
  }

  function authStateObserver(user: boolean): void {
    user ? authStateObserverSignIn() : authStateObserverSignOut();
  }

  function authStateObserverSignIn(): void {
    // what to do when the user signs in
    console.log("signed in");
  }

  function authStateObserverSignOut(): void {
    // what to do when the user signs out
    console.log("signed out");
  }

  return {
    signIn,
    signOutUser,
    initFirebaseAuth,
    getUserName,
    getUserId,
    isUserSignedIn,
  };
}
