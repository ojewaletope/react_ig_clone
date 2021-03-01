

const config = {
    apiKey: "AIzaSyArSkhVPSMhkyJgVzQ1oBialU3sERO3j6Y",
    authDomain: "igclone-e0333.firebaseapp.com",
    projectId: "igclone-e0333",
    storageBucket: "igclone-e0333.appspot.com",
    messagingSenderId: "1047835724515",
    appId: "1:1047835724515:web:2a50191c1af493f53953d6"
};

const firebase = window.firebase.initializeApp(config);
const {FieldValue} = window.firebase.firestore;

export {firebase, FieldValue}
