const slot = Object.freeze({
    EMPTY: 0,
    PLAYER: 1,
    ENEMY: 2,
});

export default class Model {

    list
    constructor() {
        this.list = [[]]
    }

    initList() {
        this.list = []; // init list
        for (let c = 0; c < 6; c++) {
            this.list[c] = []; //init list col
            for (let r = 0; r < 7; r++) {
                this.list[c][r] = slot.EMPTY
            }
        }
        console.table(this.list)
        return this.list;
    }

    insertCoin(col, player) {
        //const col = coin;
        const row = this.getNextAvailableSlotInCol(col);

        if (row !== -1) {
            this.list[row][col] = player == 'player' ? slot.PLAYER : slot.ENEMY;
            //console.table(this.list);
            //this.checkWin(row, col, player); //TODO add winning function/method
        } else {
            console.log("col is full");
            console.log("tried to add at" + col);
        }
        return this.list
    }
    getNextAvailableSlotInCol(col) {
        for (let row = this.list.length - 1; row >= 0; row--) {
            if (this.list[row][col] === slot.EMPTY) {
                return row;
            }
        }
        return -1; // col is full
    }
    

    //check win (newCoin) - should check adjecent coins using the parameter coin position
}