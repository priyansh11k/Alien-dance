function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TaqEj2fki/model.json",modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
console.log("We got the results");
if(error){
console.error(error);
}
else{
console.log(results);
r = Math.floor(Math.random()*255)+1;
//Math.random * 255 will give us number less than 255 or 254.1 etc hence we are adding 1 to make it 255
g = Math.floor(Math.random()*255)+1;
b = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
document.getElementById("accuracy").innerHTML = "Accuracy - " + (results[0].confidence * 100 ).toFixed(2) + "%";

document.getElementById("result_label").style.color="rgb(" + r + "," + g + "," + b + ")";
document.getElementById("accuracy").style.color="rbg(" + r + "," + g + "," + b + ")";


 img1 = document.getElementById("alien1");
 img2 = document.getElementById("alien2");
 img3 = document.getElementById("alien3");
 img4 = document.getElementById("alien4");

 if(results[0].label == "Clap"){
   img1.src = "aliens-01.gif"; 
   img2.src = "aliens-02.png";
   img3.src = "aliens-03.png";
   img4.src = "aliens-04.png";
 }
 else if (results[0].label == "Bell") {
     img2.src = "aliens-02.gif";
     img1.src = "aliens-01.png"; 
     img3.src = "aliens-03.png";
     img4.src = "aliens-04.png";
 }
 else if (results[0].label == "Snap") {
  img3.src= "aliens-03.gif";  
  img2.src = "aliens-02.png"; 
  img1.src = "aliens-01.png"; 
  img4.src = "aliens-04.png";

 }
 else if (results[0].label == "Background Noise") {
     img4.src = "aliens-04.gif";
     img1.src = "aliens-01.png"; 
     img3.src= "aliens-03.png";  
    img2.src = "aliens-02.png"; 

 }
     
 }

}


