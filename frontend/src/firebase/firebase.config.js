import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB_X1sJ3uBjaDuL4zZT9F-O1zdI8goqEds",
  authDomain: "event-website-6e4b2.firebaseapp.com",
  projectId: "event-website-6e4b2",
  storageBucket: "event-website-6e4b2.appspot.com",
  messagingSenderId: "142181130915",
  appId: "1:142181130915:web:2b9961089b7bb3ac449516"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Firebase services
export const storage = getStorage(app);  // For file storage
export const auth = getAuth(app);        // For authentication

// Google Auth Provider (can add others for different social media)
const provider = new GoogleAuthProvider();

// Function to handle Google sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;  // Token can be used for OAuth if needed
    const user = result.user;              
    console.log("User logged in: ", user);
    return { token, user };
  } catch (error) {
    console.error("Error during authentication: ", error);
    return null;
  }
};

export default app;
















// import { initializeApp, } from "firebase/app";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyB_X1sJ3uBjaDuL4zZT9F-O1zdI8goqEds",
//   authDomain: "event-website-6e4b2.firebaseapp.com",
//   projectId: "event-website-6e4b2",
//   storageBucket: "event-website-6e4b2.appspot.com",
//   messagingSenderId: "142181130915",
//   appId: "1:142181130915:web:2b9961089b7bb3ac449516"
// };

// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export default app