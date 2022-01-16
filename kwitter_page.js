 var firebaseConfig=
  {
  apiKey: "AIzaSyCt_-XOBg2KIdh8rGK0HmYTZ0VdARARIPQ",
  authDomain: "my-data-base-dfd38.firebaseapp.com",
  databaseURL: "https://my-data-base-dfd38-default-rtdb.firebaseio.com",
  projectId: "my-data-base-dfd38",
  storageBucket: "my-data-base-dfd38.appspot.com",
  messagingSenderId: "431883513606",
  appId: "1:431883513606:web:0bc3eb904ced831254f887"
};

// Initialize Firebase
firbase.initializeApp(firebaseConfig);

function send()
{
      var msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0      
});
document.getElementById("message").value="";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
cconsole.log(message_data);

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

var name_with_tag= "<h4> "+ name +"<img class='user_tick' src='tick.png'> </h4>";
var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
var like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
