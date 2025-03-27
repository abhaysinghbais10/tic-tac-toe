let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");


const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const abhaybhai = () =>    {
    let array = ["rock","paper","scissors"];
   let user =  Math.floor(Math.random() * 3);
   return array[user];
}
const gamedraw = () =>{
    console.log("Game is draw");
    msg.innerText = "Game is draw. Play again";

}



const playgame = (userchoice)=>{
    console.log("user choice is",userchoice);
    //computer choice
    const compchoice = abhaybhai();
    console.log("computer choice is",compchoice)
    if(userchoice === compchoice){
        // game is draw
        gamedraw();
        msg.style.backgroundColor = "yellow";

    }
    else{
        userwin = true;
        if(userchoice ==="rock" && compchoice ==="scissors"){
            userscore++;
            userscorepara.innerText = userscore;
           msg.innerText = "you win";
           msg.style.backgroundColor = "green";
        }
         else if(userchoice ==="rock" && compchoice ==="paper"){
            compscore++;
            compscorepara.innerText = compscore;
           msg.innerText = "you lose";
           msg.style.backgroundColor = "red";
         }
         else if(userchoice ==="paper" && compchoice ==="rock"){
            userscore++;
            userscorepara.innerText = userscore;
           msg.innerText = "you win";
           msg.style.backgroundColor = "green";
         }
         else if(userchoice =="paper" && compchoice =="scissors"){
            compscore++;
            compscorepara.innerText = compscore;
           msg.innerText = "you lose";
           msg.style.backgroundColor = "red";
         }
         else if(userchoice =="scissors" && compchoice =="paper"){
            userscore++;
            userscorepara.innerText = userscore;
            msg.innerText = "you win";
           msg.style.backgroundColor = "green";
         }
         else if(userchoice =="scissors" && compchoice =="rock"){
            compscore++;
            compscorepara.innerText = compscore;
            msg.innerText = "you lose";
           msg.style.backgroundColor = "red";
         }
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});