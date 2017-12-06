document.getElementById("signup").addEventListener("click", function(){
      
      var username = prompt("Hello! What is your name?");
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var password1 = document.getElementById('password1').value;
      var auth = firebase.auth();
      var user = firebase.auth().currentUser;

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
        else if (password != password1)
        {
          alert('Please Enter Same password');
          return;
        }

       firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(){

        firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });

         firebase.auth().onAuthStateChanged(function(user) {
        if(user)
        {
          var emailVerified = user.emailVerified;
        }
        if (!emailVerified) {
          alert("Please Verify your email.");
          window.location="login.html";
        }
});
      })

       .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });

      // [END sendemailverification]
      // [END sendemailverification]
    

            },false);
      // Sign in with email and pass.
        
        
      // [START createwithemail]
      
      
      // [START sendemailverification]
       
      // [END createwithemail]
  


