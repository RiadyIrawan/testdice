let started=false;
let nameChange=false;

rollDice=()=>{
if(!started){
    alert("Please Change Player's Name");
}
else if(!nameChange){
    alert("Please Change Player's Name")
}
else{let randomNumber= Math.random();
    randomNumber=Math.floor(randomNumber*6+1);
    
    let picture="images/dice"+randomNumber+".png";
    
     document.querySelector(".img1").setAttribute("src", picture);
     let randomNumber2= Math.random();
    randomNumber2=Math.floor(randomNumber2*6+1);
    
    let picture2="images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",picture2);
    
    if(randomNumber>randomNumber2){
        document.querySelector("h1").innerHTML= player1Name+"  Win "  ;
    }else if (randomNumber==randomNumber2){
        document.querySelector("h1").innerHTML=" It's a Tie! "
    }
    else{
        document.querySelector("h1").innerHTML= player2Name+" Win ";
    
    }}
    

}


changeName= ()=>{
    
     player1Name=prompt("Player 1's name: ")
     player2Name=prompt("Player 2's name: ")


   
        player1Name= document.querySelector(".player1").innerHTML=player1Name[0].toUpperCase() +player1Name.slice(1) ;
        player2Name= document.querySelector(".player2").innerHTML=player2Name[0].toUpperCase() +player2Name.slice(1);
        
    
    


    nameChange=true;
    started=true;
}

