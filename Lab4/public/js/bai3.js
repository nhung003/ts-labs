var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HinhChuNhat = /** @class */ (function () {
    function HinhChuNhat() {
        this.mota = "Các hàm liên quan hình chữ nhật, hình vuông";
    }
    HinhChuNhat.dientich = function (dai, rong) { return dai * rong; };
    HinhChuNhat.chuvi = function (dai, rong) { return (dai + rong) * 2; };
    return HinhChuNhat;
}());
var HinhVuong = /** @class */ (function (_super) {
    __extends(HinhVuong, _super);
    function HinhVuong(c) {
        var _this = _super.call(this) || this;
        _this.canh = 0;
        _this.canh = c;
        return _this;
    }
    HinhVuong.dientich = function (rong) { return rong * rong; };
    return HinhVuong;
}(HinhChuNhat));
frm.btn.onclick = function () {
    var cd = Number(frm.cd.value);
    var cr = Number(frm.cr.value);
    var hv = new HinhVuong(cr);
    var hcn = new HinhChuNhat();
    // console.log(hv, hcn);
    var dthcn1 = HinhChuNhat.dientich(cd, cr);
    var cvhcn1 = HinhChuNhat.chuvi(cd, cr);
    var dthv1 = HinhVuong.dientich(cr);
    // console.log(dt1);
    document.getElementById('dthcn').innerHTML = dthcn1;
    document.getElementById('dthv').innerHTML = dthv1;
    document.getElementById('cvhcn').innerHTML = cvhcn1;
};
