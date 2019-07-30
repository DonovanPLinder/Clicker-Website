function Fisherman(cost, fishPerSec){
    this.cost = cost;
    this.fishPerSec = fishPerSec;

    this.increaseFishermanCost = () => {
        this.cost *= 1.3;
    }
}
