import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

let config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUTCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export {
    db
}

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get () {
            return firebaseApp
        }
    })
    Object.defineProperty(Vue.prototype, '$db', {
        get () {
            return db
        }
    })
} 