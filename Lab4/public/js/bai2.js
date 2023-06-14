var tt;
function cong(so1, so2) { return so1 + so2; }
function tru(so1, so2) { return so1 - so2; }
function nhan(so1, so2) { return so1 * so2; }
function chia(so1, so2) { return so1 / so2; }
var frm = document.forms['frm'];
var taoso = function () {
    var a = Math.round(Math.random() * 20);
    var b = Math.round(Math.random() * 20);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
};
frm.btn.onclick = function () {
    var a = Number(frm.a.value);
    var b = Number(frm.b.value);
    switch (frm.pheptoan.value) {
        case "1":
            tt = cong;
            break;
        case "2":
            tt = tru;
            break;
        case "3":
            tt = nhan;
            break;
        default: tt = chia;
    }
    var kq = tt(a, b);
    console.log(a, b, kq);
    document.getElementById('ketqua').innerHTML = kq;
};
var xoa = function () {
    document.getElementById("a").value = " ";
    document.getElementById("b").value = " ";
    var ketqua = document.getElementById("ketqua");
    ketqua.remove();
};
