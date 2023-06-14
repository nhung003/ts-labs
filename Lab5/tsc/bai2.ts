interface IThongSoLaptop{
    idLT:number;
    RAM:string;
    CPU:string;
    OCung:string;
    CanNang?:number;
}
enum MÀULAPTOP {ĐEN, TRẮNG, XÁM}
interface ILapTop{
    idLT:number;
    tenLT:string;
    gia:number;
    mau:MÀULAPTOP;
}

type MyLapTop = IThongSoLaptop & ILapTop;

let listlaptop:MyLapTop[] = 
[
  { idLT:1, tenLT:'A', gia:100, mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'i1', OCung:'1GB', CanNang:1  },
  { idLT:2, tenLT:'B', gia:150, mau: MÀULAPTOP.TRẮNG, RAM:'2GB', CPU:'i2', OCung:'2GB', CanNang:3 },
  { idLT:3, tenLT:'C', gia:180, mau: MÀULAPTOP.XÁM, RAM:'4GB', CPU:'i4', OCung:'3GB', CanNang:2  },
  { idLT:3, tenLT:'D', gia:120, mau: MÀULAPTOP.TRẮNG, RAM:'8GB', CPU:'i4', OCung:'1GB', CanNang:2  },
  { idLT:4, tenLT:'E', gia:200, mau: MÀULAPTOP.XÁM, RAM:'4GB', CPU:'i1', OCung:'3GB', CanNang:8  },
  { idLT:5, tenLT:'F', gia:300, mau: MÀULAPTOP.TRẮNG, RAM:'8GB', CPU:'i2', OCung:'1GB', CanNang:2  },
  { idLT:6, tenLT:'G', gia:350, mau: MÀULAPTOP.ĐEN, RAM:'2GB', CPU:'i4', OCung:'2GB', CanNang:4  },


]
console.log(listlaptop);

for (let index = 0; index < listlaptop.length; index++) {
  let htmlLapTop = ` 
    <div class="row">
    <div class="cell" data-title="Product">
      ${listlaptop[index].idLT}
    </div>
    <div class="cell" data-title="Unit Price">
      ${listlaptop[index].tenLT}
    </div>
    <div class="cell" data-title="Quantity">
      ${listlaptop[index].gia}
    </div>
    <div class="cell" data-title="Date Sold">
      ${listlaptop[index].mau}
    </div>
    <div class="cell" data-title="Status">
      ${listlaptop[index].RAM}
    </div>
    <div class="cell" data-title="Status">
      ${listlaptop[index].CPU}
    </div>
    <div class="cell" data-title="Status">
      ${listlaptop[index].OCung}
    </div>
    <div class="cell" data-title="Status">
      ${listlaptop[index].CanNang}
    </div>
    </div>
  `
  let c = document.getElementById("product");
  c.innerHTML += htmlLapTop
}