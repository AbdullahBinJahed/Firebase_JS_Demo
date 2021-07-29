// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDn5tZ0m5Yn52mOn0HnxQARP_whYZv0KcU",
  authDomain: "fir-js-8f792.firebaseapp.com",
  projectId: "fir-js-8f792",
  storageBucket: "fir-js-8f792.appspot.com",
  messagingSenderId: "520659113418",
  appId: "1:520659113418:web:1c277d88caeb33ec62eb33",
  databaseURL: "https://fir-js-8f792-default-rtdb.asia-southeast1.firebasedatabase.app"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
var ref = db.ref('student/'+rollV);

//----------------Ready Data-------------------//

var nameV, rollV, secV, genV;

function Ready()
{
  nameV = document.getElementById('namebox').value;
  rollV = document.getElementById('rollbox').value;
  secV = document.getElementById('secbox').value;
  genV = document.getElementById('genbox').value;
  ref = db.ref('student/'+rollV);
}

//---------------Insert Process----------------//

document.getElementById('insert').onclick = function()
{
  Ready();
  ref.set(
  {
    NameOfStudent: nameV,
    RollNo: rollV,
    Section: secV,
    Gender: genV
  });
};

//---------------Selection Process---------------//

try
{
  document.getElementById('select').onclick = function()
  {
    Ready();
    ref.on('value', function(snapshot)
    {
      document.getElementById('namebox').value = snapshot.val().NameOfStudent;
      document.getElementById('secbox').value = snapshot.val().Section;
      document.getElementById('genbox').value = snapshot.val().Gender;
    });
  }
} catch (e)
{
  console.log(e);
}

//---------------Update Process----------------//

document.getElementById('update').onclick = function()
{
  Ready();
  ref.update(
  {
    NameOfStudent: nameV,
    Section: secV,
    Gender: genV
  });
};

//---------------Deletion Process----------------//

document.getElementById('delete').onclick = function()
{
  Ready();
  ref.remove();
};