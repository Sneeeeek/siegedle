const data = [["0", "Thatcher", "attacker", "AR-33"], ["1", "Smoke", "defender", "FMG-9"], ["2", "Rook", "defender", "MP5"], ["3", "Nøkk", "attacker", "FMG-9"], ["4", "Flores", "attacker", "AR-33"]];
const correctAnswer = 3;
triesLeft = 5;
const rowAmount = 3;

function fillSelect() {
    console.log(data); // debug
    index = 0;
    for (element in data) {
        option = document.createElement("option");
        option.value = data[index][0];
        option.innerHTML = data[index][1];

        document.getElementById("nameselector").appendChild(option);
        index++;
    }
}

function updateTriesLeft() {
    // console.log("updated tries left to " + triesLeft);
    document.getElementById("triesLeftCounter").innerHTML = "You have " + triesLeft + " tries left";
 
    if(triesLeft == 0){
        console.log("no more tries!");
        document.getElementById("button").setAttribute("disabled","");
        document.getElementById("completionState").classList.add("displayUnset");
        document.getElementById("completionStateText").innerHTML = "You failed!";
        return;
    }
}

function submitGuess() {
    var input = document.getElementById("nameselector").value;
    // console.log("current input value is " + input);
    correctsInARow = 0;

        for (i = 0; i < rowAmount; i++){
            option = document.createElement("p");
            option.innerHTML = data[input][i+1];

            if(validateField(input, i+1)) {
                option.classList.add("correct");
                correctsInARow++;
            } else {
                option.classList.add("incorrect");  
            }
            
            
            document.getElementById("guesses").appendChild(option);
        };
    
    if(correctsInARow == rowAmount){
        document.getElementById("button").setAttribute("disabled","");
        document.getElementById("completionState").classList.add("displayUnset");
        document.getElementById("completionStateText").innerHTML = "You won!";
        return;
    }

    triesLeft -= 1;
    console.log(triesLeft + " tries left");
    updateTriesLeft();
}

function validateField(x, y) {
    // console.log("Validating " + data[x][y]);
    // console.log("Against " + data[correctAnswer][y]);

    if(data[x][y] == data[correctAnswer][y]) {
        return true
    } else {
        return false
    }
}