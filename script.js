let counter = 1;
document.getElementById("frase1").checked = true;

function nextPhrase(){
    counter++;
    console.log(counter);
    if (counter > 4){
        counter = 1;
    }
    document.getElementById("frase"+counter).checked = true;
}


setInterval(function(){
    nextPhrase();
    },8000
);