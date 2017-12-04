document.getElementById("login").addEventListener("click", function(){
  
        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        var auth = firebase.auth();

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
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
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

        });
        firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
        console.log(firebaseUser);
        window.location="Home.html";
         }
         else{
        console.log("Authentication Failed");
        alert("Authentication Failed");
        
}
});

        // [END authwithemail]
      },false);
