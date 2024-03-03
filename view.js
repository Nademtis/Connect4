"use strict"
export default class View {
    controller;

    constructor(controller) {
        this.controller = controller;

    }
    playerInsertCoin(col) {
        console.log("player add at" + col);
        this.controller.playerInsertCoin(col)
    }

    updateGrid(list) {
        const gridContainer = document.querySelector("#grid_table");
        gridContainer.innerHTML = ""

        // lav første række - den som spiller klikker på
        const insertRow = document.createElement("tr");
        for (let c = 0; c < 7; c++) {
            const th = document.createElement("th");
            th.innerText = c + 1
            th.classList.add("insertBlock");
            th.addEventListener("click", () => this.playerInsertCoin(c))
            insertRow.appendChild(th);
        }
        gridContainer.appendChild(insertRow);

        //lav resten af grid
        for (let r = 0; r < list.length; r++) {
            const tr = document.createElement("tr")

            for (let c = 0; c < list[r].length; c++) {
                const td = document.createElement("td")
                this.addSlotCSS(td, list[r][c]);
                tr.appendChild(td);
            }
            gridContainer.appendChild(tr);
        }
    }
    addSlotCSS(slot, value) {
        slot.classList.add("slot");

        switch (value) {
            case 0: // EMPTY
                break;
            case 1: // PLAYER
                slot.classList.add("slotPlayer");
                break;
            case 2: // ENEMY
                slot.classList.add("slotEnemy");
                break;
            default:
                break;
        }
    }


}