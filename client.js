const data = [["name1", "type1", "wpn1"], ["name2", "type2", "wpn2"], ["name3", "type2", "wpn1"], ["name4", "type1", "wpn2"], ["name5", "type1", "wpn1"]];


function fillSelect(){
    console.log(data); // debug
    index = 0;
    for (element in data) {
        var option = document.createElement("option");
        option.value = data[index][0];
        option.innerHTML = data[index][0];
        // option.style.backgroundImage = "url(dog.gif)"; unused experiment
        
        document.getElementById("nameselector").appendChild(option);
        index++;
    }
}

function submitGuess() {
    
}