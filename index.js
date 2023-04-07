// get references to the button, input and output area
var wordElement = document.querySelector('.word');
var scrambleBtn = document.querySelector('.scramble-btn');
var outputElement = document.querySelector('.output');

// function to scramble word 
function scrambler() {
    
    // get value of word 
    var word = wordElement.value;
    // split the letters of the word 
    var letters = word.split('');
    alert(letters)
    //variable to store the current letter
    hold_current = '';
    // loop through the length of the array using length of letters
    for (var i = 0; i < letters.length; i++) {
        //randomize the indexes of the letters so we can assign randomly the position  of each letters
        var rand_num = Math.floor(Math.random() * i);

        hold_current = letters[i];
        letters[i] = letters[rand_num];
        letters[rand_num] = hold_current;
    }
    //create a var to hold the new word 
    // used join becuase it concatinates string elements in into one string

    var new_word = letters.join("");
    // display my new word on html
    outputElement.innerHTML = new_word;
}

// add addEventListener
scrambleBtn.addEventListener("click", scrambler);