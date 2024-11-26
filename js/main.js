

let cart=document.querySelector(".cart");
let menu=document.querySelector("#menu");

console.log(cart);

function open_cart(){
    cart.classList.add("active");
    
}
function close_cart(){
    cart.classList.remove("active");

}
// open menu
function open_menu(){
    menu.classList.add("active");
    
}
function close_menu(){
    menu.classList.remove("active");
}
// add items cart
var all_product_items
let items_in_cart =document.querySelector(".items-in-cart")
let product_cart=[];

// function add to cart
function addtocart(id , btn){
    product_cart.push(all_product_items[id]);
    btn.classList.add("active");
    getcartitem()
      
}
let count_item=document.querySelector(".count-item");
let price_cart_head=document.querySelector(".price_cart-head");
let price_cart_total=document.querySelector(".price-cart-total");
let count_item_cart =document.querySelector(".count_item_cart")

function getcartitem() {
    let tprice=0;
    let item_c="";
    for (let i = 0; i < product_cart.length; i++) {
            item_c +=`
              <div class="item-cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                         <p class="price-cart">$${product_cart[i].price}</p>
                </div>
                <button onClick="remove_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div><!--item-cart-->
            `       
            tprice += product_cart[i].price;
    }
    items_in_cart.innerHTML = item_c 
    price_cart_head.innerHTML ="$"+tprice;
    count_item.innerHTML = product_cart.length
    price_cart_total.innerHTML= "$" + tprice
    count_item_cart.innerHTML=product_cart.length 

}
function remove_cart(index){
    product_cart.splice(index, 1);
    let addtocartbutto=document.querySelectorAll(".fa-cart-plus")
    for (let i = 0; i < addtocartbutto.length; i++) {
        addtocartbutto[i].classList.remove("active")
        product_cart.forEach(product => {
            if(product.id == i){
                addtocartbutto[i].classList.add("active")

            }
            
        });
        
    }
    
    getcartitem();
}
// back to top

let back_to_top =document.querySelector(".back_to_top")
back_to_top.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"


    }

    )
})
// detail items page
let bigimg =document.getElementById("bigimg")
function changeitemimg(img){
    bigimg.src=img

    
}

