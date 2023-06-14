enum MAUSP {
  ĐỎ,
  XANH,
  ĐEN,
  TRẮNG,
}
type sanpham = {
  id: number;
  ten: string;
  gia: number;
  hinh: string;
  mau: MAUSP;
};

let sp1: sanpham = {
  id: 1,
  ten: "Samsung Galaxy S20",
  gia: 10390000,
  hinh: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra6-1.jpg",
  mau: MAUSP.ĐEN,
};

let htmldt = `
<div class="dt">
    <img src="${sp1.hinh}" alt="left" />
    <div class="content">
        <h4>Ten san pham ${sp1.ten}</h4>
        <p>Gia tien ${sp1.gia}</p>
        <p>Mau sac: ${sp1.mau}</p>
    </div>
</div>
`;
const app = document.getElementById("app") as HTMLInputElement;
app.innerHTML += htmldt;

cart = [
  [7, "Thuật Xử Thế Của Người Xưa", 80000, 2, "xuthe.jpg"],
  [2, "Sống Như Nhân Duyên", 96000, 1, "songnd.jpg"],
  [3, "Con đường hạnh phúc", 30000, 1, "cdhp.jpg"],
  [9, "Giá trị của sự tử tế", 75000, 3, "tute.jpg"],
];

cart.push([5, "Nhẹ gánh ưu phiền", 82000, 1, "nheganh.jpg"]);
console.log(cart);

let htmlCart = `<div id='cart'>`;
cart.forEach(
  (c) =>
    (htmlCart += `
  <p><span>${c[1]}</span><span>${c[2]}</span><span>${c[3]}</span><span>${
      c[3] * c[2]
    }</span></p>
`)
);
htmlCart += `</div>`;
app.innerHTML += htmlCart;
