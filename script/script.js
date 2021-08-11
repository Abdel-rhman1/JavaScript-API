let xHhtp = new XMLHttpRequest();

let Items = document.getElementById("itemsContent");
let itemsContainer = document.getElementById("itemsCont");

let Pasta = document.getElementById("Pasta");
let Pizza = document.getElementById("Pizza");
let salad = document.getElementById("salad");
let Beef = document.getElementById("Beef");
let fig = document.getElementById("fig");

getPizza();
Pizza.classList.add("activeClass");
function displayData(list){
    let content = ``;
    console.log(list);
    for(let i=0;i<list.length;i++){
        content+=`
            <div class="col-sm-4 mt-5">
            <a href="${list[i].source_url}" target="_blank" class='itemLink'>
            <div class="item">
                <div class="imgItem p-0">
                    <img src="${list[i].image_url}" class="w-100">
                </div>
                
                <div class="caption p-2">
                    <h4 class="lead text-center mt-2 ">${list[i].title}</h4>
                    <p class="text-muted">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, illum quas, suscipit nisi, deleniti at possimus dolor esse sit quia eum omnis assumenda quo. Optio impedit placeat provident non veniam!
                    </p>
                </div>
            </div>
            </a>
            </div>
        `;
    }
    Items.innerHTML = content;
}

function getPizza(){
    let PizzaList ;
    Items.innerHTML =`<div class="m-auto spinner-border text-info justify-content-center align-items-center" role="status">
        <span class="sr-only">Loading...</span>
    </div>`;
    xHhtp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?&q=pizza');
    xHhtp.send();
    xHhtp.addEventListener("readystatechange" , function(){
        if(xHhtp.readyState == 4 && xHhtp.status == 200){
            console.log("Pizza");
            PizzaList = JSON.parse(xHhtp.response).recipes;
            displayData(PizzaList);
        }
    });
}

function getBeef(){    
    let beffList;
    xHhtp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?&q=beef');
    xHhtp.send();
    Items.innerHTML =`<div class="m-auto spinner-border text-info justify-content-center align-items-center" role="status">
        <span class="sr-only">Loading...</span>
    </div>`;
    xHhtp.addEventListener("readystatechange" , function(){
        if(xHhtp.readyState == 4 && xHhtp.status == 200){
            console.log("Beef");
            beffList = JSON.parse(xHhtp.response).recipes;
            displayData(beffList);
        }
    });
}
function getSalad(){
    let saladList;
    Items.innerHTML =`<div class="m-auto spinner-border text-info justify-content-center align-items-center" role="status">
        <span class="sr-only">Loading...</span>
    </div>`;
    xHhtp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?&q=salad');
    xHhtp.send();
    xHhtp.addEventListener("readystatechange" , function(){
        if(xHhtp.readyState == 4 && xHhtp.status == 200){
            console.log("Salad");
           saladList = JSON.parse(xHhtp.response).recipes;
           displayData(saladList);
        }
    });
}
function getPasta(){
    let pastaList;
    xHhtp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?&q=pasta');
    xHhtp.send();
    Items.innerHTML =`<div class="m-auto spinner-border text-info justify-content-center align-items-center" role="status">
            <span class="sr-only">Loading...</span>
        </div>`;
    xHhtp.addEventListener("readystatechange" , function(){
        if(xHhtp.readyState == 4 && xHhtp.status == 200){
            pastaList = JSON.parse(xHhtp.response).recipes;
            displayData(pastaList);
        }
    });
}
function getFig(){
    let figList;
    xHhtp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?&q=fig');
    xHhtp.send();
    Items.innerHTML =`<div class="m-auto spinner-border text-info justify-content-center align-items-center" role="status">
            <span class="sr-only">Loading...</span>
        </div>`;
    xHhtp.addEventListener("readystatechange" , function(){
        if(xHhtp.readyState == 4 && xHhtp.status == 200){
            figList = JSON.parse(xHhtp.response).recipes;
            displayData(figList);            
        }
    });
}
Pasta.addEventListener("click" , function(){
    getPasta();
});
Pizza.addEventListener("click" , function(){
    getPizza();
});
salad.addEventListener("click" , function(){
    getSalad();
});
Beef.addEventListener("click" , function(){
    getBeef();
});
fig.addEventListener("click" , function(){
    getFig();
});