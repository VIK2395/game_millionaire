import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuk4fNVngb6Zk7VvszXdTFoUAIja7SUDI',
  authDomain: 'game-millionaire-fec3d.firebaseapp.com',
  projectId: 'game-millionaire-fec3d',
  storageBucket: 'game-millionaire-fec3d.appspot.com',
  messagingSenderId: '849398828256',
  appId: '1:849398828256:web:f5514bb24f2d3f14275485',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
firebase.firestore();

// firebase object for setting the back firebase project when export used
export default firebase;
