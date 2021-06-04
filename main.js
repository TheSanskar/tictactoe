let playerCounter = 0

function game(e) {
    let currentPlayer = getPlayer();
    console.log(currentPlayer);
    $ (`#${e.target.id}`).text(currentPlayer);
    $ (`#${e.target.id}`).prop("disabled",true);
    playerCounter++;
    won();
}

function getPlayer() {
    if (playerCounter % 2 === 0){
        return "💦";
    }else{
        return "❤️";
    }
       
}

function won() {
    if (
        $("#1").text() === "💦" &&
        $("#2").text() === "💦" &&
        $("#3").text() === "💦" 
    ) {
        alert("player 💦 won")
    }else if (
        $("#4").text() === "💦" &&
        $("#5").text() === "💦" &&
        $("#6").text() === "💦" 
    ) {
        alert("player 💦 won")
    }else if (
        $("#7").text() === "💦" &&
        $("#8").text() === "💦" &&
        $("#9").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#1").text() === "💦" &&
        $("#4").text() === "💦" &&
        $("#7").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#2").text() === "💦" &&
        $("#5").text() === "💦" &&
        $("#8").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#3").text() === "💦" &&
        $("#6").text() === "💦" &&
        $("#9").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#1").text() === "💦" &&
        $("#5").text() === "💦" &&
        $("#9").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#3").text() === "💦" &&
        $("#5").text() === "💦" &&
        $("#7").text() === "💦" 
    ){
        alert("player 💦 won")
    }else if (
        $("#1").text() === "❤️" &&
        $("#2").text() === "❤️" &&
        $("#3").text() === "❤️" 
    ) {
        alert("player ❤️ won")
    }else if (
        $("#4").text() === "❤️" &&
        $("#5").text() === "❤️" &&
        $("#6").text() === "❤️" 
    ) {
        alert("player ❤️ won")
    }else if (
        $("#7").text() === "❤️" &&
        $("#8").text() === "❤️" &&
        $("#9").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }else if (
        $("#1").text() === "❤️" &&
        $("#4").text() === "❤️" &&
        $("#7").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }else if (
        $("#2").text() === "❤️" &&
        $("#5").text() === "❤️" &&
        $("#8").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }else if (
        $("#3").text() === "❤️" &&
        $("#6").text() === "❤️" &&
        $("#9").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }else if (
        $("#1").text() === "❤️" &&
        $("#5").text() === "❤️" &&
        $("#9").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }else if (
        $("#3").text() === "❤️" &&
        $("#5").text() === "❤️" &&
        $("#7").text() === "❤️" 
    ){
        alert("player ❤️ won")
    }
    }

    


