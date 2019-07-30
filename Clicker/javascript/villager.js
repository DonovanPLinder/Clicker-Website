function Villager(cost, goldPerSec){
    this.cost = cost;
    this.goldPerSec = goldPerSec;
    
    this.increaseVillagerCost = () => {
        this.cost *= 2;
    }
}