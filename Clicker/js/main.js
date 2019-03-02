var gameData = {
  fish: 0,
  fishPerClick: 1,
  fishPerClickCost: 10,
  fisherman: 0,
  villagers: 3,
  gold: 0,
  fishermanCost: 1,
  // goldPerSecond: villagers,
  fishPerSecond: 1,
}
function catchFish() {
  gameData.fish += gameData.fishPerClick
  document.getElementById("fishCaught").innerHTML = gameData.fish + " Fish Caught"
}
function addFish(){
  gameData.fish += gameData.fisherman

  document.getElementById("fishCaught").innerHTML = gameData.fish + " Fish Caught"
}
function addGold(){
var totalGold =  gameData.gold += gameData.villagers / 5
totalGold = totalGold.toFixed(1);

document.getElementById("totalGold").innerHTML = totalGold + "Gold"
}

function buyFishPerClick(){
  if(gameData.fish >= gameData.fishPerClickCost){
    gameData.fish -= gameData.fishPerClickCost
    gameData.fishPerClick += 1
    gameData.fishPerClickCost *= 2
    document.getElementById("fishCaught").innerHTML = gameData + " Fish Caught"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Fishing Rod (Current Level " +
    gameData.fishPerClick + ") Cost: " + gameData.fishPerClickCost + " Fish"
  }
}
var mainGameLoop = window.setInterval(function() {

}, 100)

var fishermanLoop = window.setInterval(function(){
  addFish();
}, 1000)

var villagerLoop = window.setInterval(function(){
  addGold();
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('fishingIncrementalSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("fishingIncrementalSave"))
if (savegame !== null) {
  gameData = savegame
}

function villagersMake(){

  gameData.villagers += 1
  gameData.fisherman -= 1
  document.getElementById("villagers").innerHTML = gameData.villagers + " villagers"
  document.getElementById("fisherman").innerHTML = gameData.fisherman + " fisherman"

}
function fishermanMake() {

  if(gameData.gold < gameData.fishermanCost){
    document.getElementById("error").innerHTML = "You cannot buy a fisherman"
  }
  else{
  gameData.fisherman += 1
  gameData.fishermanCost = (gameData.fishermanCost *= 2)
  gameData.gold = gameData.gold - gameData.fishermanCost
  document.getElementById("fisherman").innerHTML = gameData.fisherman + " fisherman"
  document.getElementById("totalGold").innerHTML = totalGold + "Gold"


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
