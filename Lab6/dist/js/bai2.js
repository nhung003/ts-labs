var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class User {
    constructor(u, p) {
        this.username = u;
        this.password = p;
    }
}
__decorate([
    TheoDoiPass(7, 20)
], User.prototype, "password", void 0);
let u1 = new User('teo', 'huadi');
let un = u1.username;
let pw = u1.password;
function TheoDoiPass(sokytumin, sokytumax) {
    return function (constructor, tenthuoctinh) {
        let value;
        const laygiatri = function () {
            return value;
        };
        const gangiatri = function (newVal) {
            value = newVal;
            if (newVal.length <= sokytumin)
                console.log(`${tenthuoctinh} ${newVal} phải nằm trong khoảng ${sokytumin} đến ${sokytumax}`);
        };
        Object.defineProperty(constructor, tenthuoctinh, {
            get: laygiatri,
            set: gangiatri
        });
    };
}
let formLogin = document.getElementById("form-login");
formLogin.onsubmit = (e) => {
    e.preventDefault();
};
let button = document.getElementById('button');
button.onclick = function () {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    console.log(username);
    let u1 = new User(username, password);
    console.log(u1);
};
