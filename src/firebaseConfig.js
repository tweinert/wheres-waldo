const config = {
  apiKey: "AIzaSyBCZ3Rxke_IeI1Oai1ZztOUm1p6Fcf2GFw",
  authDomain: "whereswaldo-a1bbc.firebaseapp.com",
  projectId: "whereswaldo-a1bbc",
  storageBucket: "whereswaldo-a1bbc.appspot.com",
  messagingSenderId: "366032986644",
  appId: "1:366032986644:web:11b03a733c79d72e3dfd01"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.');
  } else {
    return config;
  }
}