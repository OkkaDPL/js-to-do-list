import * as data from "./data.mjs";
import { removeTodo } from "./delete.mjs";

export const clear = () => {
    data.tBody.innerHTML = ""
}

export const refreshDisplay = () => {
    clear();
    data.db.forEach((val, index) => {
        const valDb = val.toLowerCase();
        const valSearch = data.inputSearch.value.toLowerCase();

        if (valDb.includes(valSearch)) {
            addTrTd(valDb, index);
        }
    });
}

export const addTrTd = (param, param2) => {
    const tr = document.createElement('tr');
    const tdButton = document.createElement('td');
    const tdVal = document.createElement('td');
    const btnDone = document.createElement('input');
    btnDone.type = "button";
    btnDone.value = "Done";
    btnDone.onclick = () => {
        removeTodo(param2);
    }

    // Append 
    tdButton.append(btnDone);
    tdVal.innerText = param;
    tr.append(tdButton, tdVal);

    data.tBody.append(tr);
}