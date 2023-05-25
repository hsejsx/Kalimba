import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, child, set, get, remove } from 'firebase/database';
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
  return auth.onAuthStateChanged(async function (user) {
    if (user) {
      const isAdmin = await checkAdmin(user);
      callback({ ...user, isAdmin });
    } else {
      callback('');
    }
  });
}

async function checkAdmin(user) {
  const admins = await fetchAdmins();
  return admins.includes(user.uid);
}

async function fetchAdmins() {
  return get(child(dbRef, `admins`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return null;
      }
    })
    .catch(console.error);
}

const db = getDatabase(app);
const dbRef = ref(getDatabase());

export async function fetchPosts(category) {
  return await get(child(dbRef, `posts${category}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val()).sort((a, b) => b.count - a.count);
      } else {
        return null;
      }
    })
    .catch(console.error);
}

export async function fetchAllPosts() {
  const music = await fetchPosts('/music');
  const knowhow = await fetchPosts('/knowhow');
  const result = [...(music || []), ...(knowhow || [])].sort(
    (a, b) => b.count - a.count
  );
  return result;
}

export async function writePost(user, post) {
  const id = uuid();
  const now = new Date();
  let count = await get(child(dbRef, 'posts/count')).then(
    snapshot => snapshot.exists() && snapshot.val()
  );
  const { displayName: author, uid } = user;
  const { title, category, content } = post;
  set(ref(db, `posts/${category}/` + id), {
    id,
    count,
    title,
    category,
    content,
    like: 0,
    author,
    uid,
    date: JSON.stringify(now),
  });
  set(ref(db, 'posts/count'), count + 1);
}

export async function removePost(path) {
  return remove(ref(db, `posts${path}`));
}
