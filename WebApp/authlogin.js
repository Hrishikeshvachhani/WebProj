(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDomzPTwcQtQLzn4xB4Nh3ydFGysydD_8o",
    authDomain: "webapp-34ae0.firebaseapp.com",
    databaseURL: "https://webapp-34ae0.firebaseio.com",
    projectId: "webapp-34ae0",
    storageBucket: "",
    messagingSenderId: "518074473208"
  };
  firebase.initializeApp(config);

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var login = document.getElementById('login');

login.addEventListener('click' , e=> {
        var email = email.value;
        var password = password.value;
        var auth = firebase.auth();

        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        
        // Sign in with email and pass.
        // [START authwithemail]
        /*firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          
          // [END_EXCLUDE]
        });*/
        // [END authwithemail]
      });
    
});
