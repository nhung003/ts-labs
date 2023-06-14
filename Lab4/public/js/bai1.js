let cart;
cart = [
    { id: 1, tensp: 'Bún xào', gia: 40000, soluong: 1, hinh: 'bunxao.jpg' },
    { id: 2, tensp: 'Hủ tiếu', gia: 30000, soluong: 2, hinh: 'hutieu.jpg' },
    { id: 3, tensp: 'Bánh canh', gia: 35000, soluong: 1, hinh: 'banhcanh.jpg' },
    { id: 4, tensp: 'Mì xào giòn', gia: 32000, soluong: 4, hinh: 'mixaogion.jpg' },
    { id: 5, tensp: 'Soup nấm', gia: 25000, soluong: 3, hinh: 'soupnam.jpg' },
    { id: 6, tensp: 'Nấm xào sả', gia: 45000, soluong: 2 }
];
let htmlcart = ``;
cart.forEach(c => {
    htmlcart += `  
    <tr class="alert" role="alert">
    <td>
    <label class="checkbox-wrap checkbox-primary">
            <input type="checkbox" checked>
            <span class="checkmark"></span>
    </label>
    </td>
    <td>
        <div class="img" style="background-image: url(public/images/${c.hinh});"></div>
    </td>
    <td>
    <div class="email">
        <span>${c.tensp}</span>
    </div>
    </td>
    <td>${c.gia}</td>
    <td class="quantity">
    <div class="input-group">
    ${c.soluong}
        </div>
        </td>
            <td>${c.gia * c.soluong}</td>
            <td>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i class="fa fa-close"></i></span>
        </button>
        </td></tr>`;
});
document.getElementById('divCart').innerHTML = htmlcart;
