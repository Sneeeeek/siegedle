const data = [
    //attackers
    [0,"Striker","Attacker",2,"M4","Any"],
    [1,"Sledge","Attacker",2,"L85A2","Soft Breach"],
    [2,"Thatcher","Attacker",1,"L85A2","Anti Gadget"],
    [3,"Ash","Attacker",3,"R4C","Anti Gadget"],
    [4,"Thermite","Attacker",2,"556xi","Hard Breach"],
    [5,"Twitch","Attacker",2,"417","Anti Gadget"],
    [6,"Montagne","Attacker",1,"Shield","Intel"],
    [7,"Glaz","Attacker",2,"OTs-03","Utility"],
    [8,"Fuze","Attacker",1,"AK-12","Anti Gadget"],
    [9,"Blitz","Attacker",2,"Shield","Hunter"],
    [10,"IQ","Attacker",3,"552 Commando","Intel"],
    [11,"Buck","Attacker",2,"C8-SFW","Soft Breach"],
    [12,"Blackbeard","Attacker",1,"Mk17 CQB","Hunter"],
    [13,"Capitão","Attacker",3,"PARA-308","Utility"],
    [14,"Hibana","Attacker",3,"Type-89","Hard Breach"],
    [15,"Jackal","Attacker",2,"C7E","Hunter"],
    [16,"Ying","Attacker",2,"T-95 LSW","Utility"],
    [17,"Zofia","Attacker",1,"M762","Utility"],
    [18,"Dokkaebi","Attacker",3,"Mk 14 EBR","Hunter"],
    [19,"Lion","Attacker",2,"V308","Hunter"],
    [20,"Finka","Attacker",2,"Spear .308","Utilitu"],
    [21,"Maverick","Attacker",3,"M4","Hard Breach"],
    [22,"NomWB","Attacker",2,"ARX200","Utility"],
    [23,"Gridlock","Attacker",1,"F90","Utility"],
    [24,"Nøkk","Attacker",2,"FMG-9","Hunter"],
    [25,"Amaru","Attacker",2,"SuperNova","Hunter"],
    [26,"Kali","Attacker",2,"CSRX 300","Anti Gadget"],
    [27,"Iana","Attacker",2,"ARX200","Intel"],
    [28,"Ace","Attacker",2,"AK-12","Hard Breach"],
    [29,"Zero","Attacker",3,"SC300K","Intel"],
    [30,"Flores","Attacker",2,"AR33","Anti Gadget"],
    [31,"Osa","Attacker",1,"556xi","Utility"],
    [32,"Sens","Attacker",3,"417","Utility"],
    [33,"Grim","Attacker",3,"552 Commando","Intel"],
    [34,"Brava","Attacker",3,"PARA-308","Anti Gadget"],
    [35,"Ram","Attacker",1,"R4C","Soft Breach"],
    [36,"Deimos","Attacker",3,"AK-74M","Hunter"],

    //defenders
    [37,"Sentry","Defender",2,"Commando 9","Any"],
    [38,"Smoke","Defender",2,"SMG-11","Zoner"],
    [39,"Mute","Defender",1,"SMG-11","Anti Gadget"],
    [40,"Castle","Defender",2,"UMP-45","Architect"],
    [41,"Pulse","Defender",3,"UMP-45","Intel"],
    [42,"Doc","Defender",1,"MP5","Support"],
    [43,"Rook","Defender",1,"MP5","Support"],
    [44,"Kapkan","Defender",2,"9x19VSN","Trapper"],
    [45,"Tachanka","Defender",1,"9x19VSN","Zoner"],
    [46,"Jäger","Defender",3,"416-C Carbine","Anti Gadget"],
    [47,"Bandit","Defender",3,"MP7","Anti Gadget"],
    [48,"Frost","Defender",2,"9mm C1","Trapper"],
    [49,"Valkyrie","Defender",2,"MPX","Intel"],
    [50,"Caveira","Defender",3,"Luison","Hunter"],
    [51,"Echo","Defender",1,"MP5SD","Intel"],
    [52,"Mira","Defender",1,"Vector .45 ACP","Architect"],
    [53,"Lesion","Defender",2,"T-5 SMG","Trapper"],
    [54,"Ela","Defender",3,"Scorpion EVO 3 A1","Trapper"],
    [55,"Vigil","Defender",3,"K1A","Hunter"],
    [56,"Alibi","Defender",3,"Mx4 Storm","Hunter"],
    [57,"Maestro","Defender",1,"Alda 5.56","Intel"],
    [58,"Clash","Defender",1,"Shield","Zoner"],
    [59,"Kaid","Defender",1,"TCSG12","Anti Gadget"],
    [60,"Mozzie","Defender",2,"Commando 9","Anti Gadget"],
    [61,"Warden","Defender",1,"MPX","Utility"],
    [62,"Goyo","Defender",2,"Vector .45 ACP","Zoner"],
    [63,"Wamai","Defender",2,"MP5K","Anti Gadget"],
    [64,"Oryx","Defender",2,"T-5 SMG","Hunter"],
    [65,"Melusi","Defender",1,"MP5","Intel"],
    [66,"Aruni","Defender",1,"Mk14 EBR","Architect"],
    [67,"Thunderbird","Defender",2,"Spear .308","Support"],
    [68,"Thorn","Defender",2,"UZK50Gi","Trapper"],
    [69,"Azami","Defender",2,"9x19VSN","Architect"],
    [70,"Solis","Defender",2,"P90","Hunter"],
    [71,"Fenrir","Defender",2,"MP7","Trapper"],
    [72,"Tubarao","Defender",2,"MPX","Anti Gadget"],
    [73,"Skopós","Defender",2,"PCX-33","Hunter"]
];

//the correct answer is the ID number in the first dataset column.
//random integer between 0 and 73.
const correctAnswer = Math.floor(Math.random() * 74);
triesLeft = 5;
const rowAmount = 5;

function fillSelect() {
    document.getElementById("debug").innerHTML = "Correct answer ID is " + correctAnswer;
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