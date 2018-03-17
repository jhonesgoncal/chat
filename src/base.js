import Rebase from 're-base';
import Firebase from 'firebase';

const app = Firebase.initializeApp({
    apiKey: "AIzaSyBSdoFuj8peYXdn7vbx53fMLDm2iQsUrSk",
    authDomain: "reactjs-9105a.firebaseapp.com",
    databaseURL: "https://reactjs-9105a.firebaseio.com",
    projectId: "reactjs-9105a",
    storageBucket: "reactjs-9105a.appspot.com",
    messagingSenderId: "453629978837"
})

const base = Rebase.createClass(app.database());

export default base;
