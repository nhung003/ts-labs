var nameUser = prompt("Bạn tên là gì?");
var yearUser = prompt("Bạn sinh năm bao nhiêu?");
var calAge = function (year) {
    var date = new Date();
    var age = date.getFullYear() - year;
    return age;
};
var result = "Ten: " + nameUser + " - Tuoi: " + calAge(yearUser);
alert(result);
