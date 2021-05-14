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
    // ----------------FOR STORING THE USER DATA AFTER VERIFYING THE PHONE NUMBER-----------------
    // firebase.database().ref('Users/' + unumber).set({
    //   Name: uname,
    //   Pincode : upin,
    //   Number: unumber,
    // });
    // window.location = "./otp.html";
}

function done(){
  document.getElementById('done').style.display="block";
}

// -----------------PHONE AUTH-----------------------

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('search', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // submit();
    // phoneAuth();
  }
});

recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});

// ------------------FOR SENDING THE OTP
function phoneAuth(){

  unumber = document.getElementById('fnumber').value;
  var appVerifier = window.recaptchaVerifier;
  // console.log(unumber)
  console.log(appVerifier)
  firebase.auth().signInWithPhoneNumber(unumber, appVerifier)
  .then(function(response) {
    console.log(response);
    window.confirmationResult = response;

    alert("Message sent")
    // ...
  }).catch((error) => {
    console.log("Message Not Sent")
  });
}

// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//   "search",
//   {
//     'size':'invisible',
//     'callback': function(response){
//       phoneAuth();
//     }

//   }
// );
// function phoneAuth(){ 
//   console.log("sent")
//   var phone_number = window.intlTelInput(input,{
//     separateDialCode: true,
//      initialCountry: 'in',
//      hiddenInput:"full",
//     utilsScript: "./js/utils.js"
// })
//   var phoneNumber = phone_number.getNumber(intlTelInputUtils.numberFormat.E164);
//   $("input[name='phone_number[full]'").val(phoneNumber);
 
//   var verifier = window.recaptchaVerifier;

//   firebase.auth().signInWithPhoneNumber(phoneNumber,verifier)
//   .then(function(confirmationResult){
//     window.confirmationResult = confirmationResult;
//   })
//   .catch(function(error){
//     // alert(error);
//   });
// }

// function codeVerify(){
//   var code = document.getElementById("OTPCode").value;
//   confirmationResult.confirm(code)
//   .then(function(result){
//     var user = result.user;
//     console.log(user);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// }