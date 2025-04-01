import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' // Import the Firebase Authentication library

const firebaseConfig = {
  apiKey: '',
  authDomain: 'social-connection-bc44b.firebaseapp.com',
  projectId: 'social-connection-bc44b',
  storageBucket: 'social-connection-bc44b.appspot.com',
  messagingSenderId: '1055118127851',
  appId: '1:1055118127851:web:8f211ade817125817844ae',
  measurementId: 'G-BBJ9EQS21W'
}

firebase.initializeApp(firebaseConfig)

export default firebase
