var config = {
    apiKey: "AIzaSyDomzPTwcQtQLzn4xB4Nh3ydFGysydD_8o",
    authDomain: "webapp-34ae0.firebaseapp.com",
    databaseURL: "https://webapp-34ae0.firebaseio.com",
    projectId: "webapp-34ae0",
    storageBucket: "",
    messagingSenderId: "518074473208"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(firebaseUser => {
        if(!firebaseUser){
          alert("To access our page you must first login.");
           window.location="login.html";
           }
           else
           {
            var user = firebase.auth().currentUser;
            if(user!=null)
            {var name=user.displayName;
            alert("Welcome " + name);}
          }
});

