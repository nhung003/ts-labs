var arr:string = 
    `<h3>Tình quê</h3>
    Tôi về tìm lại tuổi thơ<br />
    Tìm trong câu hát ầu ơ ví dầu<br />
    Tìm về đồng ruộng nương dâu<br />
    Dòng sông bến nước cây cầu gốc đa`;

var divTho = document.getElementById('divTho');

    for (var i = 0; i < 12; i++) {
        divTho.innerHTML +=`<div id="tho"> `+ arr  + `</div>`;
    }

function doiCot(socot){
    if (socot==6)
    document.getElementById("divTho").style.gridTemplateColumns="16.67% 16.67% 16.67% 16.67% 16.67% 16.67%";
    else if (socot==4)
    document.getElementById("divTho").style.gridTemplateColumns="25% 25% 25% 25%";
}