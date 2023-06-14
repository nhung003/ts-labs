
// var arr_hinh;
// arr_hinh = [
//   { id: 1, ten: 'Hoa lan', url: 'lan.jpg', mota: 'Lan có mùi thơm dễ chịu, sang trọng, tao nhã' },
//   { id: 2, ten: 'Anh đào', url: 'anhdao.jpg', mota: 'Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết' },
//   { id: 3, ten: 'Thiên điểu', url: 'thiendieu.jpg', mota: 'Hoa có dạng chú chim đầy màu sắc' },
//   { id: 4, ten: 'Hoa tigon', url: 'tigon.jpg', mota: 'Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.' },
//   { id: 5, ten: 'Thược dược', url: 'thuocduoc.jpg', mota: 'Hoa có nhiều màu, đẹp ngất ngây lòng người,' },
//   { id: 6, ten: 'Cẩm tú cầu', url: 'camtucau.jpg', mota: 'Đẹp trang nhã, nhẹ nhàng. Sống lâu năm' },
// ];

// var divHinhDep = document.getElementById('divhinhdep');
// var hien1hinh = function (h) {
//   divHinhDep.innerHTML += "\n    <div class=\"hinh\">\n    <img src='./public/images/"
//     .concat(h.url, "' title='")
//     .concat(h.mota, "'>\n    </div>\n    ");
// };


// arr_hinh.forEach(hien1hinh);
// var arr_hinh1 = arr_hinh.sort(function (a, b) { return 0.5 - Math.random(); });
// arr_hinh1.forEach(hien1hinh);
// var arrdivHinh = document.querySelectorAll('div.hinh');
// arrdivHinh.forEach(function (div) { return div.children.item(0).className = 'an'; });
// arrdivHinh.forEach(function (div) {
//   var img = div.children.item(0);
//   div.onclick = function () {
//     img.className = (img.className == 'an') ? 'hien' : 'an';
//   };
// });
// let diem = 0;
// let hinh1 = null;
// let hinh2 = null;

// arrdivHinh.forEach((div) => {
//   let chonHinh = (div) => {
//     let img = div.children.item(0);
//     if (hinh1 == null) {
//       hinh1 = img;
//       hinh1.parentElement.classList.add('click');
//       hinh1.className = 'hien';
//     } else if (hinh2 == null && !div.classList.contains('click')) {
//       hinh2 = img;
//       hinh2.parentElement.classList.add('click');
//       hinh2.className = 'hien';

//       if (hinh1.src === hinh2.src) {
//         diem += 3;
//         hinh1 = null;
//         hinh2 = null;
//         document.querySelectorAll('.click').forEach((div) => div.classList.remove('click'));
//         updateScore();
//         if (document.querySelectorAll('.an').length === 0) {
//           alert(`Chúc mừng, bạn đã chiến thắng với điểm số ${diem - 3}`);
//           location.reload();
//         }
//       } else {
//         diem -= 1;
//         updateScore();
//         setTimeout(() => {
//           hinh1.className = 'an';
//           hinh2.className = 'an';
//           hinh1.parentElement.classList.remove('click');
//           hinh2.parentElement.classList.remove('click');
//           hinh1 = null;
//           hinh2 = null;
//         }, 1000);
//       }
//     }
//   };

//   arrdivHinh.forEach((div) => {
//     div.onclick = () => {
//       chonHinh(div);
//     };
//   });
// })
// json-server -w db.json -p 4000
type hinhdep = {
  id: number;
  ten: string;
  url: string;
  mota: string;
  level: number;
};
type nguoichoi = { id: number; ten: string; diem: number; thoidiem: number };

let arr_hinh: hinhdep[];
var urlhinh1: string = null;
var urlhinh2: string = null;
var diem = 0;
const divHinhDep = document.getElementById("divhinhdep");
const divNguoiChoi = document.getElementById("divnguoichoi");
var diemthang = 10;
var diemthua = -5;

fetch("http://localhost:4000/hinh")

  .then((res) => res.json())
  .then((data) => {
    //xu ly ban dau

    arr_hinh = data as hinhdep[];
    //them mang
    arr_hinh = arr_hinh.concat(arr_hinh);
    // xao tron mang
    arr_hinh = arr_hinh.sort((a, b) => 0.5 - Math.random());
    console.log(data);
    return arr_hinh;
  })
  .then((arr_hinh) => {
    // hien hinh trong cac div
    var divHinhDep = document.getElementById('divhinhdep');
    var hien1hinh = function (h) {
      divHinhDep.innerHTML += `
      <div class="hinh">
         <img src="/public/images/${h.url}" title='${h.mota}'>
      </div>
      `;
    };
    arr_hinh.forEach(hien1hinh);

    return arr_hinh;
  })
  .then(function (arr_hinh) {
    //an hinh trong cac div
    const arrdivHinh = document.querySelectorAll("div.hinh");
    arrdivHinh.forEach(
      (div: HTMLElement) => (div.children.item(0).className = "an")
    );
    // gan click vao cac div de an hien hinh
    arrdivHinh.forEach((div: HTMLElement) => {
      div.onclick = function () {
        nhapVaoDiv(div);
      };
    });
  });

  const luudiem = (hoten: string, diem: number) => {
    fetch("http://localhost:4000/choi", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ten: hoten, diem: diem, thoidiem: new Date() }),
    });
  };

  var selectedImg1 = null;
  var selectedImg2 = null;

  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  let nhapVaoDiv = async (div: HTMLElement) => {
    let img = div.children.item(0);
    img.className = img.className == "an" ? "hien" : "an";
    if (urlhinh1 == null) {
      urlhinh1 = img.getAttribute("src") as string;
      selectedImg1 = img;
    }
    else if (urlhinh2 == null) {
      urlhinh2 = img.getAttribute("src") as string;
      selectedImg2 = img;
    }
    if (urlhinh1 == null && urlhinh2 == null) {
      return;
    }
    //console.log(urlhinh1);
    //console.log(urlhinh2);
    if (urlhinh1 == urlhinh2) {
      diem += 3;
      selectedImg1 = null;
      selectedImg2 = null;
      urlhinh1 = null;
      urlhinh2 = null;
      }
    else {
      if (urlhinh1 != null && urlhinh2 != null) {
        diem -= 1;

        await delay(500);
        selectedImg1.className = "an"; 
        selectedImg2.className = "an"; 
      }
    // danh gia
    if (urlhinh1 != null && urlhinh2 != null) {
      urlhinh1 = null;
      urlhinh2 = null;
    }
    
    if (diem < diemthua) {
      luudiem("user", diem);
      alert("Thua mày");
    }
    if (diem > diemthang) {
      luudiem("user", diem);
      alert("Thắng mày");
    }
    // hien diem
    document.getElementById("diemso").innerHTML = String(diem);
  }
}

  // let nhapVaoDiv = (div: HTMLElement) => {
   
  //   // else urlhinh2 = img.getAttribute("src") as string;
  //   // if (urlhinh1 == null && urlhinh2 == null) return;
  //   // console.log(urlhinh1, urlhinh2);
  //   // if (urlhinh1 == urlhinh2) {
  //   //   diem += 3;
  //   // }
  //   // else {
  //   //   if (urlhinh1 != null && urlhinh2 != null) {
  //   //     diem -= 1;
  //   //   }
      
  //   // }
  //   // danh gia
  //   if (urlhinh1 != null && urlhinh2 != null) {
  //     urlhinh1 = null;
  //     urlhinh2 = null;
  //   }
    
  //   if (diem < diemthua) {
  //     luudiem("User", diem);
  //     alert("Thua rồi bạn ơi");
  //   }
  //   if (diem > diemthang) {
  //     luudiem("User", diem);
  //     alert("Thang roi ban oi");
  //   }
  //   // hien diem
  //   document.getElementById("diemso").innerHTML = String(diem);
  // };

 
  
  let hiennguoichoi = () => {
    fetch("http://localhost:4000/choi/?_sort=diem&_order=desc")
      .then((res) => res.json())
      .then((data) => {
        let listnguoichoi: nguoichoi[] = data as nguoichoi[];
        divNguoiChoi.innerHTML = `<h3>Danh sách người chơi</h3>`;
        listnguoichoi.forEach((nc, index) => {
          divNguoiChoi.innerHTML += `
              <p> <span>${index + 1}</span>
                  <span>Ten: ${nc.ten}</span>
                  <span>Diem: ${nc.diem}</span>
              </p>`;
        });
      });
  };
  hiennguoichoi();
  