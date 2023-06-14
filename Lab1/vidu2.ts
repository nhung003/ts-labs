let ptb2 = function(a:number, b:number, c:number){
    let d = b*b - 4*a*c;
    if(d < 0) return document.getElementById('ketqua').innerHTML = `Phuong trinh vo nghiem`;
    else if( d==0){
        let num = -b/(2*a);
        let n = num.toFixed(2);
        return document.getElementById('ketqua').innerHTML = `Phuong trinh co mot nghiem: ${n}`;
    }else{
        let num1 = -b - Math.sqrt(d)/(2*a);
        let num2 = -b + Math.sqrt(d)/(2*a);
        let n1 = num1.toFixed(2);
        let n2 = num2.toFixed(2);
        return document.getElementById('ketqua').innerHTML = `Phuong trinh co hai nghiem phan biet x1 = ${n1} va x2 = ${n2}`;
    }
}

let taoso = function(){
    let a = -10 + Math.round(Math.random()*20);
    let b = -10 + Math.round(Math.random()*20);
    let c = -10 + Math.round(Math.random()*20);

    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;

}

var solangiai = 0;
let dem = function(){
    solangiai++;
    document.getElementById("solangiai").innerHTML = solangiai;
}

let xoa = function(){
    document.getElementById("a").value = " ";
    document.getElementById("b").value = " ";
    document.getElementById("c").value = " ";


    var ketqua = document.getElementById("ketqua");
    var solangiai = document.getElementById("solangiai");
    ketqua.remove();
    solangiai.remove();


}