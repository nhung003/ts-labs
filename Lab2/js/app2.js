var apiKey = 'vQ3RMMeeCNRzZ2Wm1pQDz2ucm49hEryockFcYre1Ubc5YRR1uFPLRn23';
var tukhoa = 'People';
var url = "https://api.pexels.com/v1/search?query=".concat(tukhoa);
var htmlAnhDep = "<div class=\"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\" id=\"anhdep\">";
fetch(url, { headers: { Authorization: apiKey } })
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.photos.forEach(function (hinh) {
        var h = {
            id: hinh.id,
            dorong: hinh.width,
            docao: hinh.height,
            diachi: hinh.src.landscape,
            tacgia: hinh.photographer,
            mota: hinh.alt
        };
        htmlAnhDep += "\n      <div>\n      <div class=\"aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8\">\n      <img src=\"".concat(h.diachi, "\" alt=\"").concat(h.mota, "\" class=\"h-full w-full object-cover object-center group-hover:opacity-75\">\n      </div>\n      <h3 class=\"mt-4 text-sm text-gray-700\">R\u1ED9ng ").concat(h.dorong, " Cao: ").concat(h.docao, "</h3>\n      <p class=\"mt-1 text-lg font-medium text-gray-900\">Tac gia: ").concat(h.tacgia, "</p>\n      <p class=\"mt-1 text-lg font-medium text-gray-900\">Tac gia: ").concat(h.tacgia, "</p>\n\n      </div>\n      ");
    });
    htmlAnhDep += "</div>";
    app.innerHTML += htmlAnhDep;
});
