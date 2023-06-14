let arr_hinh;
var urlhinh1 = null;
var urlhinh2 = null;
var diem = 0;
const divHinhDep = document.getElementById("divhinhdep");
const divNguoiChoi = document.getElementById("divnguoichoi");
var diemthang = 10;
var diemthua = -5;
fetch("http://localhost:4000/hinh")
    .then((res) => res.json())
    .then((data) => {
    arr_hinh = data;
    arr_hinh = arr_hinh.concat(arr_hinh);
    arr_hinh = arr_hinh.sort((a, b) => 0.5 - Math.random());
    console.log(data);
    return arr_hinh;
})
    .then((arr_hinh) => {
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
    const arrdivHinh = document.querySelectorAll("div.hinh");
    arrdivHinh.forEach((div) => (div.children.item(0).className = "an"));
    arrdivHinh.forEach((div) => {
        div.onclick = function () {
            nhapVaoDiv(div);
        };
    });
});
const luudiem = (hoten, diem) => {
    fetch("http://localhost:4000/choi", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ten: hoten, diem: diem, thoidiem: new Date() }),
    });
};
var selectedImg1 = null;
var selectedImg2 = null;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let nhapVaoDiv = async (div) => {
    let img = div.children.item(0);
    img.className = img.className == "an" ? "hien" : "an";
    if (urlhinh1 == null) {
        urlhinh1 = img.getAttribute("src");
        selectedImg1 = img;
    }
    else if (urlhinh2 == null) {
        urlhinh2 = img.getAttribute("src");
        selectedImg2 = img;
    }
    if (urlhinh1 == null && urlhinh2 == null) {
        return;
    }
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
        document.getElementById("diemso").innerHTML = String(diem);
    }
};
let hiennguoichoi = () => {
    fetch("http://localhost:4000/choi/?_sort=diem&_order=desc")
        .then((res) => res.json())
        .then((data) => {
        let listnguoichoi = data;
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
