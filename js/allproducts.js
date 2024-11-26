const filter=document.querySelector(".filter")
function open_close_filetr(){
    filter.classList.toggle("active")

}


fetch('js/items.json')
            .then(Response => Response.json())
            .then(data => {
                const products_dev =document.getElementById("products_dev");

 



                all_product_items =data;
                data.forEach(product => {
                    const old_price_parag=product.old_price ? `<p class="old-price"> $${product.old_price} </p>`: ""

                        const percent_discount = Math.floor((product.old_price - product.price) / product.old_price *100)
                        const discont=product.old_price ? `<span class="sale-present">%${percent_discount}</span>`: ""

                        products_dev.innerHTML +=`
                         <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        ${discont}
                        <div class="img_product">
                            <img  src="${product.img}" alt="">
                            <img  class="img-hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name-product">
                            <a href="item.html">${product.name} </a>
                        </h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div><!--stars-->
                        <div class="price">
                            <p> <span> $${product.price} </span> </p>
                            ${old_price_parag}
                        </div><!--price-->
                    </div><!--product-->
                        
                        `
                    
                });


              
            } )