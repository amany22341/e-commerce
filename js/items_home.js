fetch('js/items.json')
            .then(Response => Response.json())
            .then(data => {
                const items_sale =document.getElementById("items_sale");
                const products_swip =document.getElementById("products_swip");
                const products_swip2 =document.getElementById("products_swip2");

 



                all_product_items =data;
                data.forEach(product => {
                    if(product.old_price){
                        const percent_discount = Math.floor((product.old_price - product.price) / product.old_price *100)
                        items_sale.innerHTML +=`
                         <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale-present">%${percent_discount}</span>
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
                            <p class="old-price"> $${product.old_price} </p>
                        </div><!--price-->
                    </div><!--product-->
                        
                        `
                    }
                    
                });


                data.forEach(product => {
                        products_swip.innerHTML +=`
                         <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addtocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img-hover" src="${product.img_hover}" alt="">
                        </div>
                        <h3 class="name-product">
                            <a href="#">${product.name} </a>
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
                        </div><!--price-->
                    </div><!--product-->
                        
                        `
                    
                    
                });

                data.forEach(product => {
                    products_swip2.innerHTML +=`
                     <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addtocart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name-product">
                        <a href="#">${product.name} </a>
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
                    </div><!--price-->
                </div><!--product-->
                    
                    `
                
                
            });
            } )