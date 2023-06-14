var arr = "<h3>T\u00ECnh qu\u00EA</h3>\n    T\u00F4i v\u1EC1 t\u00ECm l\u1EA1i tu\u1ED5i th\u01A1<br />\n    T\u00ECm trong c\u00E2u h\u00E1t \u1EA7u \u01A1 v\u00ED d\u1EA7u<br />\n    T\u00ECm v\u1EC1 \u0111\u1ED3ng ru\u1ED9ng n\u01B0\u01A1ng d\u00E2u<br />\n    D\u00F2ng s\u00F4ng b\u1EBFn n\u01B0\u1EDBc c\u00E2y c\u1EA7u g\u1ED1c \u0111a";
var divTho = document.getElementById('divTho');
for (var i = 0; i < 12; i++) {
    divTho.innerHTML += "<div id=\"tho\"> " + arr + "</div>";
}
function doiCot(socot) {
    if (socot == 6)
        document.getElementById("divTho").style.gridTemplateColumns = "16.67% 16.67% 16.67% 16.67% 16.67% 16.67%";
    else if (socot == 4)
        document.getElementById("divTho").style.gridTemplateColumns = "25% 25% 25% 25%";
}
