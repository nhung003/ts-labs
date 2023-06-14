var xuly = function () {
    var tensp = document.getElementById('tensp');
    var loai = document.getElementById('loai');
    var tt = document.forms[0].tt;
    var cn = document.getElementById('chongnuoc');
    var ct = document.getElementById('chongtrom');
    var mota = document.getElementById('mota');
    if (tensp == null) {
        document.getElementById("tensp-err").innerHTML = "Bạn chưa nhập tên sản phẩm";
        return false;
    }
    else if (loai == 0) {
        document.getElementById("loai-err").innerHTML = "Bạn chưa nhập loai sản phẩm";
        return false;
    }
    else if (tt == null) {
        document.getElementById("tt-err").innerHTML = "Bạn chưa nhập tinh trang sản phẩm";
        return false;
    }
    else if (mota == null) {
        document.getElementById("mota-err").innerHTML = "Bạn chưa nhập mô tả sản phẩm";
        return false;
    }
    console.log("Tensp= ", tensp.value, " Loại= ", loai.value);
    console.log("Chống nước= ", cn.checked, " Chống trộm= ", ct.checked);
    console.log("Trạng thái= ", tt.value, " Mô tả= ", mota.value);
};
