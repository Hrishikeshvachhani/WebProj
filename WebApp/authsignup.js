document.getElementById("signup").addEventListener("click", function(){

      var username = prompt("Hello! What is your name?");
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.value=null) {
          alert("Please Enter email");
        }
        else if (password.value=null) {
          alert("Please Enter password");
        }
        else if (email.length < 4) {
          alert('Please enter correct email address.');
          return;
        }
        else if (password.length < 4) {
          alert('Please enter correct password.');
          return;
        }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
    });
       firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
        console.log(firebaseUser);
        window.location="login.html";
         }
});
      
      // [END createwithemail]
    },false);
