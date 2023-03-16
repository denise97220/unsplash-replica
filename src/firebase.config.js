import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBUqfnlqD7wsSGkEuL-aS7mmJjjqc9GAVU',
  authDomain: 'unsplash-auth.firebaseapp.com',
  projectId: 'unsplash-auth',
  storageBucket: 'unsplash-auth.appspot.com',
  messagingSenderId: '1094009673866',
  appId: '1:1094009673866:web:dd0a067d0e57a98c0e3573'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
