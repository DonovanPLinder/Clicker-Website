function User(gold, fishPerClick, fishTotal, fishermanCount, villagerCount){
    this.gold = gold;
    this.fishPerClick = fishPerClick;
    this.fishTotal = fishTotal;
    this.fishermanCount = fishermanCount;
    this.villagerCount = villagerCount;
    this.fisherman = fisherman;
    this.villager = villager; 

    this.addFisherman = () => {
        if(user.gold >= fisherman.cost){
            user.fishermanCount += 1;
            user.gold -= fisherman.cost;
            return true;
        }else{
            return false;
        }
    }

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

    

