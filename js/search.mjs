import * as data from "./data.mjs"
import { refreshDisplay } from "./display.mjs";


data.inputSearch.onkeydown = () => {
    refreshDisplay();
}

data.inputSearch.onkeyup = () => {
    refreshDisplay();
}