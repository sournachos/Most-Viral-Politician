import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRCHMDM-1YX1zvnPacma2ghiessKmGUFk",
    authDomain: "mvp-prod-c4bbb.firebaseapp.com",
    databaseURL: "https://mvp-prod-c4bbb-default-rtdb.firebaseio.com",
    projectId: "mvp-prod-c4bbb",
    storageBucket: "mvp-prod-c4bbb.appspot.com",
    messagingSenderId: "989695809969",
    appId: "1:989695809969:web:2dea459b6eb92b791f0590"
})

export const auth = app.auth()
export const db = app.firestore()
export default app