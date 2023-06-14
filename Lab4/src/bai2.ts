interface tinhtoan {
    (a: number, b: number): number;
}

let tt: tinhtoan;
function cong(so1: number, so2: number): number {return so1 + so2}
function tru(so1: number, so2: number): number {return so1 - so2}
function nhan(so1: number, so2: number): number {return so1 * so2}
function chia(so1: number, so2: number): number {return so1 / so2}


let frm = document.forms['frm'];
let taoso = function(){
    let a = Math.round(Math.random()*20);
    let b = Math.round(Math.random()*20);

    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
}
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



let xoa = function(){
    document.getElementById("a").value = " ";
    document.getElementById("b").value = " ";

    var ketqua = document.getElementById("ketqua");
    ketqua.remove();

}