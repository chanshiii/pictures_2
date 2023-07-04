
//firebaseStorageより画像の読み出し
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getStorage } from "firebase/storage";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_JBdHTVPMdCnF1kCNdCPeM7BxHKnu8OU",
    authDomain: "pictures-fc50e.firebaseapp.com",
    projectId: "pictures-fc50e",
    storageBucket: "pictures-fc50e.appspot.com",
    messagingSenderId: "1019109300557",
    appId: "1:1019109300557:web:3234142dc98f763a0e7f04"
};
// console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();
const storageRef = ref(storage, "gs://pictures-fc50e.appspot.com/fileName1.png");
const imageElement = document.getElementById("photo");
getDownloadURL(storageRef)
    .then((url) => {
        imageElement.src = url;
    })
    .catch((error) => {
        console.log(error);
    });


// </body>


// </html>