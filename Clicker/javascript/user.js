function User(gold, fishPerClick, fishTotal, fishermanCount, villagerCount){
    this.gold = gold;
    this.fishPerClick = fishPerClick;
    this.fishTotal = fishTotal;
    this.fishermanCount = fishermanCount;
    this.villagerCount = villagerCount;
    this.fisherman = fisherman;
    this.villager = villager; 

    //Function to add a fisherman to the user
    this.addFisherman = () => {
        //if the user has enough gold to purchase 
        if(user.gold >= fisherman.cost){
            /*add one to the fisherman count and subtract the cost of a fisherman from the user's gold
              returning true to tell main.js that the add was successful*/
            user.fishermanCount += 1;
            user.gold -= fisherman.cost;
            return true;
        }else{
            return false;
        }
    }

    //Function to add a villager to the user
    //Works just like addFisherman except that it cost's fish to purchase a villager
    this.addVillager = () => {
        if(user.fishTotal >= villager.cost){
            user.villagerCount += 1;
            user.fishTotal -= villager.cost;
            return true;
          }
          else{
            return false;
          }
    }
}

    

