var total_price = document.querySelector('.total');
total_price_value = parseInt(total_price.innerText.slice(0,total_price.innerText.length - 2));
pluslist = document.getElementsByClassName('fa-plus-circle');
minuslist = document.getElementsByClassName('fa-minus-circle');
deletelist = document.getElementsByClassName('fa-trash-alt');
likelist = document.getElementsByClassName('fa-heart')
function add(){
    
    parent = this.parentElement;
    quantity = parent.querySelector('span');
    quantity.innerText ++ ;

    grand=parent.parentElement;
    price = grand.querySelector('.unit-price').innerText
    price = parseInt(price.slice(0,price.length - 2));
    total_price_value += price;
    total_price.innerText = total_price_value + " $";
    

}

function substract(){
    var parent = this.parentElement ;
    var quantity = parent.querySelector('span');
    if(parseInt(quantity.innerText) > 0){
        quantity.innerText = parseInt(quantity.innerText) - 1 ;
    }

    grand=parent.parentElement;
    price = grand.querySelector('.unit-price').innerText
    price = parseInt(price.slice(0,price.length - 2));
    if(total_price_value - price > 0){
        total_price_value -= price;
    }
    else{total_price_value = 0}
    total_price.innerText = total_price_value + " $";
}

function deletee(){
    product = this.parentElement.parentElement.parentElement.parentElement;
    console.log(product);
    list = document.querySelector('.list-products');
    price = product.querySelector('.unit-price');
    price_value = parseInt(price.innerText.slice(0,price.innerText.length - 2)) ;
    qte = product.querySelector('.quantity');
    qte_value = parseInt(qte.innerText) ;
    total_price_value -= price_value*qte_value;
    total_price.innerText = total_price_value + " $";
    list.removeChild(product);


    
}

function favourite(){
    if(this.style.color != 'red'){this.style.color = 'red';}
    else{this.style.color = 'black'}
}

for(elemnt of pluslist){
    elemnt.addEventListener('click',add);
}
for(element of minuslist){
    element.addEventListener('click',substract);
}
for(element of deletelist){
    element.addEventListener('click',deletee);
}
for(element of likelist){
    element.addEventListener('click',favourite)
}

