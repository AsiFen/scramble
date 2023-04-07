// get references to the button, input and output area
var userInputElement = document.querySelector('.userInput');
var scrambleBtn = document.querySelector('.scramble-btn');
var outputElement = document.querySelector('.output');

// function to scramble word 
function scrambler() {

    // get value of user input 
    var input = userInputElement.value;
    // split the input  
    var split_input = input.split('');
    alert(letters)
    //variable to store the current letter
    hold_current = '';
    // loop through the length of the array using length of letters
    for (var i = 0; i < split_input.length; i++) {
        //randomize the indexes of the letters so we can assign randomly the position  of each letters
        var rand_num = Math.floor(Math.random() * i);

        hold_current = split_input[i];
        split_input[i] = split_input[rand_num];
        split_input[rand_num] = hold_current;
    }
    //create a var to hold the new word 
    // used join becuase it concatinates string elements in into one string

    var new_word = split_input.join("");
    // display my new word on html
    outputElement.innerHTML = new_word;
}
// add addEventListener
scrambleBtn.addEventListener("click", scrambler);