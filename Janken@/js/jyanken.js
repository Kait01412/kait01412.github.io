function hands(language){
    
    var computer = Math.floor(Math.random()*3);
    console.log("Computer："+computer);
    var message = "";
   
var wins = document.getElementById("wins");
    var count1 = wins.innerHTML;
var lose = document.getElementById("lose");
    var count2 = lose.innerHTML;
var drow = document.getElementById("drow");
    var count3 = drow.innerHTML;

    var result = (language - computer + 3) % 3;
    if(result == 1){
        message = "君の負けだよー、また挑戦してね!";
        count2++;
    } else if (result == 2) {
        message = "あなたの勝ちだ！すごいぞ！";
        count1++;
    } else if (result  == 0) {
        message = "あいこだ、もう一回挑戦してみよう";
        count3++;
    }
 wins.innerHTML = count1;
 lose.innerHTML = count2;
 drow.innerHTML = count3 ;
              
    viewPrompt(message);
}

function viewPrompt(message){
    //var promtMessage = prompt();
    var html_promtMessage = document.getElementById("promptMessage");
    html_promtMessage.innerHTML = message;
    console.log(message);
}

function reset(){
var wins = document.getElementById("wins");
var lose = document.getElementById("lose");
var drow = document.getElementById("drow");
 wins.innerHTML = 0;
 lose.innerHTML = 0;
 drow.innerHTML = 0;
}