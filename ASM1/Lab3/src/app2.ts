
var arr_hinh = [];
arr_hinh = [
  {
    id: 1,
    ten: "Hoa lan",
    url: "lan.jpg",
    mota: "Lan có mùi thơm dễ chịu, sang trọng, tao nhã",
  },
  {
    id: 2,
    ten: "Anh đào",
    url: "anhdao.jpg",
    mota: "Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết",
  },
  {
    id: 3,
    ten: "Thiên điểu",
    url: "thiendieu.jpg",
    mota: "Hoa có dạng chú chim đầy màu sắc",
  },
  {
    id: 4,
    ten: "Hoa tigon",
    url: "tigon.jpg",
    mota: "Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.",
  },
  {
    id: 5,
    ten: "Thược dược",
    url: "thuocduoc.jpg",
    mota: "Hoa có nhiều màu, đẹp ngất ngây lòng người,",
  },
  {
    id: 6,
    ten: "Cẩm tú cầu",
    url: "camtucau.jpg",
    mota: "Đẹp trang nhã, nhẹ nhàng. Sống lâu năm",
  },
  {
    id: 7,
    ten: "Hoa lan",
    url: "lan.jpg",
    mota: "Lan có mùi thơm dễ chịu, sang trọng, tao nhã",
  },
  {
    id: 8,
    ten: "Anh đào",
    url: "anhdao.jpg",
    mota: "Hoa mỏng manh, tượng trưng cho sắc đẹp và tinh khiết",
  },
  {
    id: 9,
    ten: "Thiên điểu",
    url: "thiendieu.jpg",
    mota: "Hoa có dạng chú chim đầy màu sắc",
  },
  {
    id: 10,
    ten: "Hoa tigon",
    url: "tigon.jpg",
    mota: "Hoa màu hồng, cánh mỏng manh.Mọc thành từng chùm.",
  },
  {
    id: 11,
    ten: "Thược dược",
    url: "thuocduoc.jpg",
    mota: "Hoa có nhiều màu, đẹp ngất ngây lòng người,",
  },
  {
    id: 12,
    ten: "Cẩm tú cầu",
    url: "camtucau.jpg",
    mota: "Đẹp trang nhã, nhẹ nhàng. Sống lâu năm",
  },
];
var divHinhDep = document.getElementById("divhinhdep");
// let hinh:any[];
var hien1hinh = function (h) {
  divHinhDep.innerHTML +=
    '\n    <div class="hinh">\n        <img src=\'./public/images/'
      .concat(h.url, "' title='")
      .concat(h.mota, "'>\n    </div>");
  // hinh.push(divHinhDep);
};
// arr_hinh.forEach(hien1hinh);
var arr_hinh1 = arr_hinh.sort(function (a, b) {
  return 0.5 - Math.random();
});
arr_hinh1.forEach(hien1hinh);
// console.log(arr_hinh1);

//code an cac hinh dep khi mowi nap trang
var arrdivHinh = document.querySelectorAll("div.hinh");
arrdivHinh.forEach(function (div) {
  return (div.children.item(0).className = "an");
});



function reset(){
  document.getElementById("diemso").innerHTML = "";
  arrdivHinh.forEach(function (div) {
    return (div.children.item(0).className = "an");
  });
}

var urlhinh1 = null;
var urlhinh2 = null;
var diemso = 0;
// cod an hien khi click chuot va div.hinh
arrdivHinh.forEach(function (div) {
  var img = div.children.item(0);
  div.onclick = function opencard() {
    img.className = (img.className == 'an') ? 'hien' : 'an';
    if (urlhinh1 == null) {
      urlhinh1 = img.getAttribute("src");
      return;
    } else {
      urlhinh2 = img.getAttribute("src");
    }

    if (urlhinh1 != null && urlhinh2 != null) {
      if (urlhinh1 == urlhinh2) {
        diemso += 3;
      } else {
        diemso -= 1;
      }
    }

    urlhinh1 = null;
    urlhinh2 = null;
    document.getElementById("diemso").innerHTML = String(diemso);
  };

 

});
