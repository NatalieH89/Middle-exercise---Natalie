function formSubmit(){   
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var userPhone = document.getElementById("phone").value;
    var userEmail = document.getElementById("email").value;
    
    if (!firstName){
        document.getElementById("formerror1").style.display="block";
    }
    if (!lastName){
        document.getElementById("formerror2").style.display="block";
    }
    if (!userPhone){
        document.getElementById("formerror3").style.display="block";
    }
    if (!userEmail){
        document.getElementById("formerror4").style.display="block";
    }
}

// var myVar = setInterval(myTimer, 1000);
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

// var imageSources = ["images/paz_250x110103131473.jpg" ,"images/250X110668568400.jpg" ,"images/banner_atar.jpg"]

// var index = 0;

// setInterval (function(){
//   if (index === imageSources.length) {
//     index = 0;
//   }
//   document.getElementById("changePhoto").src = imageSources[index];
//   index++;
// } , 2000);

// setInterval(setImage, 1300);
 
// function setImage() {
//   var x = document.getElementById("changePhoto");
//   x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }