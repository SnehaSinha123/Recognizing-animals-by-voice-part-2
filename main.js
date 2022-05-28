

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8QPcBrDJU/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("results_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("results_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("results_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("results_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    

    if (results[0].label == "Barking") {
      document.getElementById("ssd").src="dog.gif"
    } else if (results[0].label == "Meowing") {
        document.getElementById("ssd").src="cat.gif"
    } else if (results[0].label == "Mooing") {
        document.getElementById("ssd").src="moo.gif"
    } else if (results[0].label == "Roar") {
        document.getElementById("ssd").src="Lion.gif"
    }else{
        document.getElementById("ssd").src="head.png"
    }
  }
}