import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, child, set, get } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onAuthStateChange(callback) {
  return auth.onAuthStateChanged(function (user) {
    if (user) {
      callback(user);
    } else {
      callback('');
    }
  });
}

const db = getDatabase(app);
const dbRef = ref(getDatabase());

export async function fetchPosts(category) {
  return await get(child(dbRef, `posts${category}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .reverse();
      } else {
        return null;
      }
    })
    .catch(console.error);
}

export function writePost(user, post) {
  const id = uuid();
  const now = new Date();
  const { displayName: author, uid } = user;
  const { title, category, content } = post;
  set(ref(db, `posts/${category}/` + id), {
    id,
    title,
    category,
    content,
    like: 0,
    author,
    uid,
    date: JSON.stringify(now),
  });
}
