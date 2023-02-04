const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});    
// today added 14
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
   
}).catch(function (error){
   var errorcode = error.code;
   var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   const promise = auth.signInWithEmailAndPassword(email,password);
   promise.catch( e => alert(e.msg));
   window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault();
   var userInfo = datab.push();
   userInfo.set({
    name: getId('text'),
       email : getId('email'),
       password : getId('lpassword')
   });
   alert("Successfully Signed Up");
   console.log("sent");
   document.getElementById('form').reset();
});
function  getId(id){
   return document.getElementById(id).value;
}

var firebaseConfig= {
  apiKey: "AIzaSyDRqCaaZtoHk-XsJXhNj_ruMEcLTgvvAhc",
  authDomain: "fitnessapp-5fa10.firebaseapp.com",
  projectId: "fitnessapp-5fa10",
  storageBucket: "fitnessapp-5fa10.appspot.com",
  messagingSenderId: "533497023173",
  appId: "1:533497023173:web:d2cf32e036c3e450c67eac",
  measurementId: "G-9GJXG03N12"

}