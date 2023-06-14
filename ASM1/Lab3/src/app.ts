var thuTrongTuan = function (t) {
  if (t === void 0) { t = -1; }
  switch (t) {
      case 0:
          return "Chu Nhat";
          break;
      case 1:
          return "Thứ Hai";
          break;
      case 2:
          return "Thứ Ba";
          break;
      case 3:
          return "Thứ Tư";
          break;
      case 4:
          return "Thứ Năm";
          break;
      case 5:
          return "Thứ Sáu";
          break;
      case 6:
          return "Thứ Bảy";
          break;
      default: return "";
  }
};
var t = new Date().getDay();
var thu = thuTrongTuan(t);
console.log(thu);
function tg() {
  var dh = null;
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var day = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();
  document.getElementById("thu").innerHTML = thu + "/"+day+"/"+month+"/"+year;

  document.getElementById("dongho").innerHTML = h + ":" + m + ":" + s;

}
dh = setInterval("tg()", 1000);
function startstopDH() {
  if (dh == null)
      dh = setInterval("tg()", 1000);
  else {
      clearInterval(dh);
      dh = null;
  }
}

// let chuoi = `Hay@#; 'Y___"""eu" !N!+h*@*a?u %D&i`;
function xoaKyTuDacBiet(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  return str;
}

var chuoi = prompt("Hãy nhập chuỗi bất kỳ( nhập cả kí tự đặc biêt): ");
chuoi = xoaKyTuDacBiet(chuoi);
console.log(chuoi); //Hay Yeu Nhau Di
document.getElementById("chuoi").innerHTML = chuoi;
