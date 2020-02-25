var text;   //Creates Text Variable
var moneyText;  
var stockText;
var abandText;

var rubberBands = 295;
var aBand = 0;
var money = 2000;
var inventory = 0;
var chance = 3;

var rubber = 500;
var rubberball = 0;
window.addEventListener("load", startGame);




/**
 * function "startGame" starts all the features of the game. 
 */

function startGame(){

    text=document.getElementById("rubberbands");
    moneyText = document.getElementById("money")
    stockText = document.getElementById("stock")
    abandText = document.getElementById("aband")
    rubberText = document.getElementById("rubber")
    rubberballText = document.getElementById("tradeBands")
    window.setInterval(function(){ update(); }, 1000/10);
}
/**
 *  function "makeBands" Makes rubberbands and uses 10 "rubber" per band 
 */
 
 function makeBands(){
    if (rubber>=10){
        rubberBands+=1
        rubber-=10
    }
    inventory+=1;
    //rubberBands+=1;
}
/**
 * Function "autoBand" allows the user to buy auto bands if their money is above 10. 
 */
function autoBand(){
    if(money>10){
        money-=10;
        aBand+=0.1;
    }

}
/**
 * function "sell" sells the rubberbands Once created.
 *@returns will return if chance of selling is to low.
 */
function sell(){
    var num = Math.floor(Math.random() * 10) +1;

    if(num>chance){return;}

    if(inventory>=1){
        inventory-=1;
        money+=1
    }
}

function buyRubber(){
    if (money>=25){
        money-=25;
        rubber+=1000;
    }
}

function tradeBands(){
    if (rubberBands>=300){
        rubberBands-=300;
        rubberball+=1;
    }

}


function update(){
    rubberBands+=aBand;
    inventory+=aBand;

    text.innerHTML = "rubberbands made:" + Math.floor(rubberBands);
    moneyText.innerHTML = "Money:" + Math.floor(money);
    stockText.innerHTML = "Stock:" + Math.floor(inventory);
    abandText.innerHTML = "AutoClips:" + Math.floor(aBand*10);
    rubberText.innerHTML = "Rubber:" + Math.floor(rubber);
    rubberballText.innerHTML = "rubberball:" + Math.floor(rubberball);
 
    var x = document.getElementById("auto").style;
    if(money<10){
        x.display="";
    }else{
        x.display = "block";
    }
    sell();
}