
var firebaseConfig = {
      apiKey: "AIzaSyCt_-XOBg2KIdh8rGK0HmYTZ0VdARARIPQ",
      authDomain: "my-data-base-dfd38.firebaseapp.com",
      databaseURL: "https://my-data-base-dfd38-default-rtdb.firebaseio.com",
      projectId: "my-data-base-dfd38",
      storageBucket: "my-data-base-dfd38.appspot.com",
      messagingSenderId: "431883513606",
      appId: "1:431883513606:web:0bc3eb904ced831254f887"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! ";

  function addRoom()
{
      room_names=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room Name"
            
                });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
     

      });});}
      
getData();

function redirectToRoomName(name);
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
