import app from 'firebase/app'
import 'firebase/auth'
// import { config } from './config'
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJ_ID,
  storageBucket: process.env.REACT_APP_STOR_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: name
    })
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async authListener() {
    return app.auth().currentUser
  }

  async googleSignIn() {
    const googleProvider = new app.auth.GoogleAuthProvider()
    return await app.auth().signInWithPopup(googleProvider)
  }

  async signOut() {
    await app.auth().signOut()
  }

  checkAuthedUser() {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
      }
    })
  }
}

const firebase = new Firebase()
export default firebase
