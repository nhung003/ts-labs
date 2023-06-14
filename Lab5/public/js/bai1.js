"use strict";
let sp1 = {
    id: 12,
    ten: 'Lenovo Ideapad 3 15IAU7',
    gia: 10990000,
    mota: `Laptop Lenovo Ideapad 3 15IAU7 i3 có kích thước màn hình 15.6 inch với độ phân giải Full HD giúp các chi tiết hiển thị trên màn hình được rõ ràng, sắc nét.`,
    hinh: 'https://cdn.tgdd.vn/Products/Images/44/287769/Slider/vi-vn-lenovo-ideapad-3-15iau7-i3-82rk005lvn-1.jpg',
    nsx: { idNSX: 1, tenNSX: 'Lenovo' },
    thuoctinh: [
        { tenTT: 'CPU', giaTri: 'i3 1215U1.2GHz' },
        { tenTT: 'RAM', giaTri: '8 GBDDR4 2 khe' },
        { tenTT: 'Ổ cứng', giaTri: '256 GB SSD NVMe' },
    ]
};
let a = document.getElementById('divCart');
let htmlProduct = `
<div class = "product-imgs">
<div class = "img-display">
  <div class = "img-showcase">
    <img src = "${sp1.hinh}" alt = "shoe image">
  </div>
</div>

</div>
<!-- card right -->
<div class = "product-content">
<h2 class = "product-title">${sp1.ten}</h2>
<a href = "#" class = "product-link">visit nike store</a>
<div class = "product-rating">
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star"></i>
  <i class = "fas fa-star-half-alt"></i>
  <span>4.7(21)</span>
</div>

<div class = "product-price">
  <p class = "last-price">Tên Nhà Sản Xuất : ${sp1.nsx.tenNSX}</span></p>
  <p class = "new-price">New Price: <span>${sp1.gia}</span></p>
</div>

<div class = "product-detail">
  <h2>about this item: </h2>
  <p>${sp1.mota}</p>
 
  <ul>
    <li><span>${sp1.thuoctinh[0].tenTT}</span> : ${sp1.thuoctinh[0].giaTri}</li>
    <li><span>${sp1.thuoctinh[1].tenTT}</span> : ${sp1.thuoctinh[1].giaTri}</li>
    <li><span>${sp1.thuoctinh[2].tenTT}</span> : ${sp1.thuoctinh[2].giaTri}</li>
  </ul>
</div>

<div class = "purchase-info">
  <input type = "number" min = "0" value = "1">
  <button type = "button" class = "btn">
    Add to Cart <i class = "fas fa-shopping-cart"></i>
  </button>
  <button type = "button" class = "btn">Compare</button>
</div>
</div>
`;
a.innerHTML += htmlProduct;
