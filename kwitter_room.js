//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDqelRezqUVeiT5rE0ziVc626uK-9-XKAE",
      authDomain: "kwitter-c93-97.firebaseapp.com",
      databaseURL: "https://kwitter-c93-97-default-rtdb.firebaseio.com",
      projectId: "kwitter-c93-97",
      storageBucket: "kwitter-c93-97.appspot.com",
      messagingSenderId: "686698382760",
      appId: "1:686698382760:web:50859a76c5fbd5691bc99d"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

 //- Actualizar el elemento HTML con el nombre de usuario y nombre de sala .
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 //Actualizamos el elemento HTML que tiene el id=’user_name’, con “Hola ” +username= “!”. 
 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

 //función add Room

 function addRoom() {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");
    
    }

//viene de la documentación de firebase
  //cambiar getData por GetRoom para evitar tomar otra variable
function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Ahora añade filas para cada nombre de sala: 
      //Inicio del código

      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;

      //Final del código
      });});}

      //cambiar getData por getRoom
getRoom();

//Redirecciona a RoomName():

function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

//Añadimos la función logout() 
 
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

