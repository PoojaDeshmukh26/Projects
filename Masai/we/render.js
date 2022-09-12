let tbody= document.querySelector("tbody");
let sort=document.getElementById("sort");

let paginationDom= document.getElementById("pagination");

let crypto_per_page=10;
let currentPageState=1;
let pages= Math.ceil(crypto_data.length/crypto_per_page);

//for data display on the browser
function rederDOM(data){
tbody.innerHTML=null;
data.forEach(function(ele){
    let tr=document.createElement("tr");

    let name=document.createElement("td");
    name.innerText=ele.name;

    let image = document.createElement("img");
      image.src = ele.image;


    let curr_price=document.createElement("td");
    curr_price.innerText=ele. curr_price;

    let market_cap=document.createElement("td");
    market_cap.innerText=ele.market_cap;

    let high24=document.createElement("td");
    high24.innerText=ele.high24;

    let low24=document.createElement("td");
    low24.innerText=ele.low24;

    tr.append(image,name,curr_price,market_cap,high24,low24)
    tbody.append(tr);
})
}

//for the pagination 
function renderPagination(pages){
  for(let i=1; i<=pages; i++){
    let btn=document.createElement("button");
    btn.innerText=i;
    btn.addEventListener("click",function(){
        currentPageState=i;
        //console.log(currentPageState);
        paginatedTable(crypto_data,currentPageState,crypto_per_page)
    })
    paginationDom.append(btn);
  }
}
renderPagination(pages);



//note:-data=mcrypto_Data,
//page=currentPageState,
//perPage=crypto_per_page
function paginatedTable(data,page,perPage){
let start=perPage * (page-1)
let end=perPage * page;
let splited=data.slice(start,end);
rederDOM(splited);
}
paginatedTable(crypto_data,currentPageState,crypto_per_page)

sort.addEventListener("change",function(){
    if(sort.value===""){
        paginatedTable(crypto_data,currentPageState,crypto_per_page)
    }else{
    let crypto_data_copy=crypto_data.map(function(el){
        return el;
    });

        let sorted=crypto_data_copy.sort(function(a,b){
            if(sort.value==="Low-High"){
                return a.high24-b.high24;
            }else if(sort.value==="High-Low"){
                return b.high24-a.high24;
            }
        })
        paginatedTable(sorted,currentPageState,crypto_per_page)
    }
});
    