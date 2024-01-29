import { db } from "./data.mjs"
import { refreshDisplay } from "./display.mjs";
export const removeTodo = (param) => {
    const konfirm = confirm('Are u sure?');

    if (konfirm) {
        alert('Data berhasil terhapus');
        db.splice(param, 1);
        refreshDisplay();
    }
}