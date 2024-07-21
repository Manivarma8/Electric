const btn = document.getElementById("select");

function calculateElectricBill(read) {
    let result = 0;

    if (read > 1000) {
        let get1 = (read - 1000) * 11;
        let get2 = 200 * 10;
        let get3 = 200 * 9;
        let get4 = 100 * 8;
        let get5 = 100 * 6;
        let get6 = 300 * 4.5;
        result = get1 + get2 + get3 + get4 + get5 + get6;
    } else if (read > 800 && read <= 1000) {
        let get2 = (read - 800) * 10;
        let get3 = 200 * 9;
        let get4 = 100 * 8;
        let get5 = 100 * 6;
        let get6 = 300 * 4.5;
        result = get2 + get3 + get4 + get5 + get6;
    } else if (read > 600 && read <= 800) {
        let get3 = (read - 600) * 9;
        let get4 = 100 * 8;
        let get5 = 100 * 6;
        let get6 = 300 * 4.5;
        result = get3 + get4 + get5 + get6;
    } else if (read > 500 && read <= 600) {
        let get4 = (read - 500) * 8;
        let get5 = 100 * 6;
        let get6 = 300 * 4.5;
        result = get4 + get5 + get6;
    } else if (read > 400 && read <= 500) {
        let get5 = (read - 400) * 6.0;
        let get6 = 300 * 4.5;
        result = get5 + get6;
    } else if (read > 200 && read <= 400) {
        let get5 = (read - 200) * 4.5;
        let get6 = 100 * 2.25;
        result = get5 + get6;
    } else if (read > 100 && read <= 200) {
        let get6 = (read - 100) * 2.25;
        result = get6;
    }

    return result;
}

btn.addEventListener("click", () => {
    let read = parseInt(document.getElementById("texts").value);
    let result = calculateElectricBill(read);
    document.getElementById("val").innerHTML = "Total bill: " + result  + "/-";
});