import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFirebaseConfig } from './firebaseConfig';

const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

const content = document.getElementById('content');
content.textContent = "This means it works";