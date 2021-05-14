var firebaseConfig = {
  apiKey: "AIzaSyAzaJE7sUZZ-S_-pgb37-5-WhrfAgMQISI",
  authDomain: "checkforvaccine.firebaseapp.com",
  databaseURL: "https://checkforvaccine-default-rtdb.firebaseio.com",
  projectId: "checkforvaccine",
  storageBucket: "checkforvaccine.appspot.com",
  messagingSenderId: "940558363211",
  appId: "1:940558363211:web:eeff6cb0999d4780a73bce",
  measurementId: "G-1LZMJ6007H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

  var uname=null, upin=null, unumber=null;

function ready(){
  uname = document.getElementById('fname').value;
  upin = document.getElementById('fpin').value;
  unumber = document.getElementById('fnumber').value;
}

function submit(){
  ready();
  console.log(uname);

    firebase.database().ref('Users/' + unumber).set({
      Name: uname,
      Pincode : upin,
      Number: unumber,
    });
    
}

function done(){
  document.getElementById('done').style.display="block";
}