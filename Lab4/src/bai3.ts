interface IHinhChuNhat {
    mota:string;
}

class HinhChuNhat implements IHinhChuNhat{
    public mota:string = "Các hàm liên quan hình chữ nhật, hình vuông";
    static dientich = (dai:number, rong:number):number => dai*rong;
    static chuvi = (dai:number, rong:number):number => (dai+rong)*2;
}

class HinhVuong extends HinhChuNhat {
    private canh:number=0;
    constructor(c:number){
        super();
        this.canh = c;
    }
}

frm.btn.onclick = function () {
    
    let cd = Number(frm.cd.value);
    let cr = Number(frm.cr.value);
    
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
    
    