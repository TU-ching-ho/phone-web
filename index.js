const phone = document.querySelector("#p-number");
const anal = document.querySelector("#analytics")

function analytics() {
    let pnumber = phone.value;
    if (pnumber == "") {
        alert("請輸入手機號碼");
        return;
    }

    if (pnumber.length < 10) {
        alert("手機號碼為10個數字");
        return
    }
    const re = /09\d{8}/;
    if (!re.test(pnumber)) {
        alert("手機號碼格式不正確");
        return;
    }
    analyticspnumber(pnumber)
}

function analyticspnumber(pnumber) {
    let fournumber = pnumber.substring(pnumber.length - 4, pnumber.length);
    let code = parseInt((fournumber / 80 - parseInt(fournumber / 80)) * 80);
    console.log(code);

}
