import Model from "/model.js"
import View from "/view.js"

export default class Controller {
    view
    model
    player = 'player'
    enemy = 'enemy'
    timeout = 0.7

    constructor() {
        this.model = new Model()
        this.view = new View(this)
    }
    initGame() {
        const list = this.model.initList()
        this.view.updateGrid(list)
    }
    playerInsertCoin(col) {
        const list = this.model.insertCoin(col, this.player)
        this.view.updateGrid(list)

        //check win after player insert

        setTimeout(() => {
            //console.log("enemy should set random coin");
            const list = this.model.insertCoin(this.RandomInt(0,7), this.enemy)
            this.view.updateGrid(list)
            //check win after enemy insert
        }, this.timeout * 1000);

        
    }
    
    RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}