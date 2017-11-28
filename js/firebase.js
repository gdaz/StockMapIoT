import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDiylLp72nJXGAdszFHTGfUc0fVE0sx2sQ",
  authDomain: "saving-money-09-27-17.firebaseapp.com",
  databaseURL: "https://saving-money-09-27-17.firebaseio.com",
  projectId: "saving-money-09-27-17",
  storageBucket: "saving-money-09-27-17.appspot.com",
  messagingSenderId: "368975197336"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

// AIzaSyDk_5DkCJirjfVv9KH-Fuu_Dek6PL7_mW8
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDk_5DkCJirjfVv9KH-Fuu_Dek6PL7_mW8&callback=initMap"
