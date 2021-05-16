import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB2Xr1URqZpPCcOW9nnKcw8pYJJrqNZTWc',
  authDomain: 'modern-move-clothing-db.firebaseapp.com',
  projectId: 'modern-move-clothing-db',
  storageBucket: 'modern-move-clothing-db.appspot.com',
  messagingSenderId: '962620579168',
  appId: '1:962620579168:web:78a0305fdea4ecb84ed205',
  measurementId: 'G-1VH8BLRL7Y',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
