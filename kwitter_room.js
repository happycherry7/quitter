const firebaseConfig = {
  apiKey: "AIzaSyCnSHjSSROY1pOCxSnz_XKPysp6mQFLKzM",
  authDomain: "kwitter-9127e.firebaseapp.com",
  databaseURL: "https://kwitter-9127e-default-rtdb.firebaseio.com",
  projectId: "kwitter-9127e",
  storageBucket: "kwitter-9127e.appspot.com",
  messagingSenderId: "403916686460",
  appId: "1:403916686460:web:5061a7099482e5650335f9"
};

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id) ># " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
      console.log(room_name)
      localStorage.setItem("roome_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("rooom_name");
          window.location = "index.html";
}

