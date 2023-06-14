const xuly = function() {
    let tensp = document.getElementById('tensp') as HTMLInputElement;
    let loai = document.getElementById('loai') as HTMLInputElement;
    let tt = document.forms[0].tt as HTMLInputElement;
    let cn = document.getElementById('chongnuoc') as HTMLInputElement;
    let ct = document.getElementById('chongtrom') as HTMLInputElement;
    let mota = document.getElementById('mota') as HTMLInputElement;

    if(tensp == null){
        document.getElementById("tensp-err").innerHTML = "Bạn chưa nhập tên sản phẩm";
        return false;

    }else if(loai == 0){
        document.getElementById("loai-err").innerHTML = "Bạn chưa nhập loai sản phẩm";
        return false;

    }else if(tt == null){
        document.getElementById("tt-err").innerHTML = "Bạn chưa nhập tinh trang sản phẩm";
        return false;

    }else if(mota == null){
        document.getElementById("mota-err").innerHTML = "Bạn chưa nhập mô tả sản phẩm";
        return false;
    }
    console.log("Tensp= ", tensp.value, " Loại= ", loai.value);
    console.log("Chống nước= ", cn.checked, " Chống trộm= ", ct.checked);
    console.log("Trạng thái= ", tt.value, " Mô tả= ",  mota.value);
}

