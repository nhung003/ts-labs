var MAUSP;
(function (MAUSP) {
    MAUSP[MAUSP["\u0110\u1ECE"] = 0] = "\u0110\u1ECE";
    MAUSP[MAUSP["XANH"] = 1] = "XANH";
    MAUSP[MAUSP["\u0110EN"] = 2] = "\u0110EN";
    MAUSP[MAUSP["TR\u1EAENG"] = 3] = "TR\u1EAENG";
})(MAUSP || (MAUSP = {}));
var sp1 = {
    id: 1,
    ten: "Samsung Galaxy S20",
    gia: 10390000,
    hinh: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra6-1.jpg",
    mau: MAUSP.ĐEN
};
var htmldt = "\n<div class=\"dt\">\n    <img src=\"".concat(sp1.hinh, "\" alt=\"left\" />\n    <div class=\"content\">\n        <h4>Ten san pham ").concat(sp1.ten, "</h4>\n        <p>Gia tien ").concat(sp1.gia, "</p>\n        <p>Mau sac: ").concat(sp1.mau, "</p>\n    </div>\n</div>\n");
var app = document.getElementById("app");
app.innerHTML += htmldt;
cart = [
    [7, 'Thuật Xử Thế Của Người Xưa', 80000, 2, 'xuthe.jpg'],
    [2, 'Sống Như Nhân Duyên', 96000, 1, 'songnd.jpg'],
    [3, 'Con đường hạnh phúc', 30000, 1, 'cdhp.jpg'],
    [9, 'Giá trị của sự tử tế', 75000, 3, 'tute.jpg'],
];
cart.push([5, 'Nhẹ gánh ưu phiền', 82000, 1, 'nheganh.jpg']);
console.log(cart);
var htmlCart = "<div id='cart'>";
cart.forEach(function (c) { return htmlCart += "\n  <p><span>".concat(c[1], "</span><span>").concat(c[2], "</span><span>").concat(c[3], "</span><span>").concat(c[3], "*>").concat(c[2], "</span></p>\n"); });
htmlCart += "</div>";
app.innerHTML += htmlCart;
