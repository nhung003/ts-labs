var ptb2 = function (a, b, c) {
    var d = b * b - 4 * a * c;
    if (d < 0)
        return document.getElementById('ketqua').innerHTML = "Phuong trinh vo nghiem";
    else if (d == 0) {
        var num = -b / (2 * a);
        var n = num.toFixed(2);
        return document.getElementById('ketqua').innerHTML = "Phuong trinh co mot nghiem: ".concat(n);
    }
    else {
        var num1 = -b - Math.sqrt(d) / (2 * a);
        var num2 = -b + Math.sqrt(d) / (2 * a);
        var n1 = num1.toFixed(2);
        var n2 = num2.toFixed(2);
        return document.getElementById('ketqua').innerHTML = "Phuong trinh co hai nghiem phan biet x1 = ".concat(n1, " va x2 = ").concat(n2);
    }
};
var taoso = function () {
    var a = -10 + Math.round(Math.random() * 20);
    var b = -10 + Math.round(Math.random() * 20);
    var c = -10 + Math.round(Math.random() * 20);
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
};
var solangiai = 0;
var dem = function () {
    solangiai++;
    document.getElementById("solangiai").innerHTML = solangiai;
};
var xoa = function () {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    var ketqua = document.getElementById("ketqua");
    var solangiai = document.getElementById("solangiai");
    ketqua.remove();
    solangiai.remove();
};
