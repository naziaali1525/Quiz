function check(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    
    let correct = 0;

    if (question1 == "holy land") {
        correct++;
}
    if (question2 == "jasmine") {
        correct++;
}
    if (question3 == "markhor") {
        correct++;
    }
let messages = ["Great job!", "That's just okay", "You really need to do better"];
let pictures = ["pictures/win.gif", "pictures/average.gif", "pictures/fail.gif"];
let range;

        if (correct < 1) {
            range = 2;
        }
        if (correct > 0 && correct < 3){
            range = 1;
        }
        if (correct > 2 ) {
            range = 0;
        }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
    document.getElementById("footer").innerHTML = "The End";
    
    
    
   
}