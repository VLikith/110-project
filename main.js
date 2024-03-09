var prediction1="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
});
Webcam.attach("#camera");
function click1(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML="<img id='img1' src='"+pic+"'>";
    });    
};
console.log("ml5version=", ml5.version);
var modelc=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aMYCvuHW9/model.json", modelloaded);
function modelloaded(){
    console.log("Model has started.");
};
function click2(){
    var img=document.getElementById("img1");
    modelc.classify(img, showop);
}
function showop(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        prediction1=results[0].label;
        if (prediction1=="Thumbs up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if (prediction1=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if (prediction1=="Ok"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
    }
}