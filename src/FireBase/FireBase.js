import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC6qIa5AtQGzzVGRQro0eS2rNxgFJUN7ac",
  authDomain: "towntales-416216.firebaseapp.com",
  projectId: "towntales-416216",
  storageBucket: "towntales-416216.appspot.com",
  messagingSenderId: "102028059906",
  appId: "1:102028059906:web:b2dfd2a644267c63590e1b",
  measurementId: "G-V3Y31G4MQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore= getFirestore(app);
const storage= getStorage(app);

export {app,auth,firestore,storage };