const randNumber = () => Math.floor(Math.random() * 20);

const firstWord = ['The baked cookie', 'The magic eigth ball', 'The cracked genie', 'The pink frog', 'The witch in the swamp'];
const verb = ['says,', 'predicts,', 'foresights,', 'sees,'];
const thirdWord = [ 'that you will win the lotto!',
                    'that today will rain, carry an umbrella!',
                    'you will get that raise!',
                    'the job is gonna be yours!'];

const phraseGenerator = () =>  {
    return  firstWord[Math.floor(Math.random() * (firstWord.length))] + " " + 
            verb[Math.floor(Math.random() * (verb.length))] + " " + 
            thirdWord[Math.floor(Math.random() * (thirdWord.length))];
};

document.getElementById("btn1").onclick = function() {
    document.getElementById("id1").innerHTML = "You might want to click the other button pal";
    disableButton("btn1");
    ableButton("btn2");
};

document.getElementById("btn2").onclick = function() {
    document.getElementById("id1").innerHTML = phraseGenerator();
};

const disableButton = (btnId) => {
    document.getElementById(btnId).disabled = true;
};

const ableButton = (btnId) => {
    document.getElementById(btnId).disabled = false;
};