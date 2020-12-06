let okButton = document.querySelector("#okButton");
let userInput = document.querySelector("#userInput");
let secretNumber = getRandom(1,100);
let	answer=document.querySelector("h4");
let newButton = document.querySelector("#newButton");
let livesTag=document.querySelector("#livesTag");
let lives=10;
livesTag.innerHTML="жизнь: "+lives;
let tips = document.getElementById("tips");

function getRandom(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

okButton.onclick=function(event){
	event.preventDefault();
	let userNumber = userInput.value;
	console.log(userNumber);
	if (secretNumber==userNumber){
		answer.innerHTML="Ответ: правильно";
		tips.innerHTML="Подсказки: "
		okButton.disabled=true;
	}   else{
		if (secretNumber>userNumber) {
			tips.innerHTML="секретное число больше";
		}
		else{
			tips.innerHTML="секретное число меньше";
		}
		answer.innerHTML="Ответ:  неправильно";
		lives=lives-1;
		livesTag.innerHTML="жизнь: "+lives;
        if (lives==0) {
        	livesTag.innerHTML="ты проиграл. секретное число: "+secretNumber;
        	okButton.disabled=true;
        }
	}
}
newButton.onclick=function(event){
	event.preventDefault();
	secretNumber = getRandom(1,100);
	console.log(secretNumber);
	userInput.value = "";
	userInput.select();
	answer.innerHTML="Ответ:";
    lives=10;
	livesTag.innerHTML="жизнь: "+lives;
	okButton.disabled=false;
	tips.innerHTML="Подсказки: "

}