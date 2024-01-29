import { form, db } from "./data.mjs";
import { refreshDisplay } from "./display.mjs";

form.onsubmit = (params) => {
    params.preventDefault();
    const valInput = form['inputTodo'].value;
    if (valInput !== "" && valInput !== null) {
        alert('Data berhasil ditambahkan!');
        db.push(valInput);
        refreshDisplay();
    } else {
        alert('Data tidak valid!');
    }
    form.reset();
}
