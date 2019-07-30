//Initializing game objects
var fisherman = new Fisherman(1, 1);                              //Fisherman(cost, fishPerSec)
var villager = new Villager(1, 0.2);                              //Villager(cost, goldPerSec)
var user = new User(0, 1, 0, 1, 1,);                              //User(gold, fishPerClick, fishTotal, fishermanCount, villagerCount)


//GAMESTATE-----------------------------------------------------------------------------------
window.setInterval(function() {
  addFish();
  addGold();
  updateFish();
  updateGold();
  updateFisherman();
  updateVillagers();
}, 1000);

//These functions essentially update the game data and display current values like total gold and total fish to the web page
function addFish(){
  user.fishTotal += user.fishermanCount * fisherman.fishPerSec;
}
function addGold(){
  user.gold += user.villagerCount * villager.goldPerSec;
}
function updateFish(){
  document.querySelector("#fishCaughtValue").innerText = user.fishTotal;
}
function updateGold(){
  document.querySelector("#totalGoldValue").innerHTML = Math.floor(user.gold);
}
function updateFisherman(){
  document.querySelector("#fisherman").innerHTML = user.fishermanCount + " Fisherman";
  document.querySelector("#costFishermanNote").innerHTML = Math.ceil(fisherman.cost);
}
function updateVillagers(){
  document.querySelector("#villagers").innerHTML = user.villagerCount + " Villagers";
  document.querySelector("#costVillagerNote").innerHTML = Math.ceil(villager.cost);
}
//Button Events--------------------------------------------------------------------------------
function catchFish(){
  user.fishTotal++;
  document.querySelector("#fishCaughtValue").innerHTML = user.fishTotal;
}

//Buy Fisherman
function buyFisherman() {
  var addFisherman = user.addFisherman();
  if(addFisherman){
    fisherman.increaseFishermanCost();
    updateGold();
    updateFisherman();
  }
  else{
    document.getElementById("error").innerHTML = "You cannot buy a fisherman!";
    document.getElementById("error").style.display = "block";
    window.setTimeout(() => { 
      document.getElementById("error").style.display = "none";
    }, 3000);
  }
}

//Buy Villager
function buyVillager() {
  var addVillager = user.addVillager();
  if(addVillager){
    villager.increaseVillagerCost();
    updateFish();
    updateVillagers();
  }
  else{
    document.getElementById("error").innerHTML = "You cannot buy a villager!";
    document.getElementById("error").style.display = "block";
    window.setTimeout(() => { 
      document.getElementById("error").style.display="none";
    }, 3000);
  }
}


// Time Bar--------------------------------------------------------------------------------
var expeditionCostFisherman = [1, 3, 8, 15];
var expeditionCostGold = [10, 15, 25, 50];
var expeditionCostTime = [1, 2, 5, 10];
function startExpedition(){
if(gameData.fisherman < expeditionCostFisherman[0]){
  document.getElementById("expeditionError").innerHTML = "Not Enough Funds";
}
else{
  gameData.totalGold = gameData.totalGold - expeditionCostGold[0]
  gameData.fisherman = gameData.fisherman - expeditionCostFisherman[0]
  document.getElementById("fisherman").innerHTML = gameData.fisherman + " fisherman"
  document.getElementById("totalGold").innerHTML = gameData.totalGold + " gold"
  var width = 0;
  var elem = document.getElementById("myBar");
  var myVar = setInterval(function(){
    if(width < 60){
      width++;
      elem.style.width = width + '%';
    }
    else{
      gameData.fisherman = gameData.fisherman + expeditionCostFisherman[0]
      gameData.totalGold = gameData.totalGold + expeditionCostGold[0]
    }
  },1000*expeditionCostTime[3]);
}
}
// Expedition -------------------------------------------------------
var expeditionsArray = [
  [1, 10, 1]
];
// var expeditionCostGold = [, 15, 25, 50];
// var expeditionCostTime = [1, 2, 5, 10];
function startExpedition(){
if(gameData.fisherman < expeditionsArray[0][0]){
  document.getElementById("expeditionError").innerHTML = "Not Enough Funds";
}
else{
  gameData.totalGold = gameData.totalGold - expeditionsArray[0][1]
  gameData.fisherman = gameData.fisherman - expeditionsArray[0][2]
  document.getElementById("fisherman").innerHTML = gameData.fisherman + " fisherman"
  document.getElementById("totalGold").innerHTML = gameData.totalGold + " gold"
  var width = 0;
  var elem = document.getElementById("myBar");
  var myVar = setInterval(function(){
    if(width < 60){
      width++;
      elem.style.width = width + '%';
    }
    else{
      gameData.fisherman = gameData.fisherman + expeditionsArray[0][0]
      gameData.totalGold = gameData.totalGold + expeditionsArray[0][1]
    }
  },1000*expeditionsArray[0][1]);
}
}

