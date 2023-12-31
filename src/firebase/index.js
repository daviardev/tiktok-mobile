import { getApp, getApps, initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PRIVATE_APIKEY,
  authDomain: process.env.NEXT_PRIVATE_AUTHDOMAIN,
  projectId: process.env.NEXT_PRIVATE_PROJECTID,
  storageBucket: process.env.NEXT_PRIVATE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PRIVATE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PRIVATE_APPID
}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
