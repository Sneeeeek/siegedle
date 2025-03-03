const options = ["name1", "name2", "name3", "name4", "name5"];

function fillSelect(){
    console.log("loaded js");
    console.log(options);
    index = 0;
    for (element in options) {
        var option = document.createElement("option");
        option.value = options[index];
        option.innerHTML = options[index];
        // option.style.backgroundImage = "url(dog.gif)";
        
        // then append it to the select element
        document.getElementById("nameselector").appendChild(option);
        index++;
    }
}