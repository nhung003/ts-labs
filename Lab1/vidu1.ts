let nameUser:string = prompt("Bạn tên là gì?");
let yearUser:number = prompt("Bạn sinh năm bao nhiêu?");

const calAge = (year) => {
    let date = new Date();
    let age = date.getFullYear() - year;
    return age;
};
let result = "Ten: " + nameUser + " - Tuoi: " + calAge(yearUser);
alert(result);


