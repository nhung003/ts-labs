// vQ3RMMeeCNRzZ2Wm1pQDz2ucm49hEryockFcYre1Ubc5YRR1uFPLRn23
type  hinhanh = {
    id:number;
    dorong:number;
    docao:number;
    diachi:string;
    tacgia:string;
    mota:string;
  }
  
  //goi code trong API
  let apiKey ='vQ3RMMeeCNRzZ2Wm1pQDz2ucm49hEryockFcYre1Ubc5YRR1uFPLRn23';
  let tukhoa = 'People';
  let url = `https://api.pexels.com/v1/search?query=${tukhoa}`;
  let htmlAnhDep = `<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" id="anhdep">`;
  
  fetch(url,{headers:{Authorization: apiKey}})
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    data.photos.forEach(hinh =>{
      // console.log(hinh);
      let h:hinhanh ={
        id:hinh.id,
        dorong:hinh.width,
        docao:hinh.height,
        diachi:hinh.src.landscape,
        tacgia:hinh.photographer,
        mota:hinh.alt
      };
  
      htmlAnhDep += `
      <div>
      <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img src="${h.diachi}" alt="${h.mota}" class="h-full w-full object-cover object-center group-hover:opacity-75">
      </div>
      <h3 class="mt-4 text-sm text-gray-700">Rộng ${h.dorong} Cao: ${h.docao}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">Tac gia: ${h.tacgia}</p>
      <p class="mt-1 text-lg font-medium text-gray-900">Tac gia: ${h.tacgia}</p>

      </div>
      `;
     
    });
    htmlAnhDep +="</div>";
    app.innerHTML += htmlAnhDep;
  })
