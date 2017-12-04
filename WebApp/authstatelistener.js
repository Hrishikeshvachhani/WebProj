function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
        
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
        
          var email = user.email;
      
          
          var uid = user.uid;
          
          // [START_EXCLUDE]
          
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          
        } else {
          // User is signed out.
          // [START_EXCLUDE]
          
          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
      
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
     
    }
    window.onload = function() {
      initApp();
    };