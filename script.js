let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-game");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 =true; //playerX   ,player0
let count =0;
//winning patterns
const Winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =() =>{
    turn0 =true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
      //  console.log("box was clicked");
        if(turn0){//for player 0
            box.innerText ="0";
            turn0 =false
        }
        else{//player X
            box.innerText ="X"
            turn0 =true;
        }
        //make it disable after clicking
        box.disabled =true;
        count++;
     let isWinner=   checkWinner();
     if(count ===9 && !isWinner){
        gameDraw();
     }
    });
});

const gameDraw =() =>{
    msg.innerText =`Game was a Draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled =true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
      box.innerText= "";
    }
};

 const showWinner =(winner) =>{
msg.innerText =`Congraguations,The Winner is ${winner}`;
msgcontainer.classList.remove("hide");
 disableBoxes();
};

        //choose the winner here
    const  checkWinner = () =>{
        for(let pattern of Winpatterns){
       let pos1val =boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val =   boxes[pattern[2]].innerText;
        
        if(pos1val !=""&& pos2val !=""&& pos3val !=""){
            if(pos1val ===pos2val  && pos2val ===pos3val  ){
              //  console.log("Winner",pos1val);
                showWinner(pos1val);
                return true;
            }
        }

        }
       
                
       };
       
   newGameBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);