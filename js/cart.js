cart_items = JSON.parse(window.sessionStorage.getItem("cart_items"));

window.onload = function(){
  // CART BUBBLE
  let Cart_Li = document.getElementById("cart-li");
  let cart_items = JSON.parse(sessionStorage.getItem('cart_items'));
  let l;
  if(cart_items==null || cart_items.length==0){
    l=0;
  }
  else{
    l = cart_items.length;
  }
  Cart_Li.children[1].innerHTML = "&nbsp;"+l+"&nbsp;";

  // MAIN
  let Cart = document.getElementById("cart_list");
  let subTotal=0,tax,total;

  Cart.innerHTML="";

  if(cart_items==null || cart_items.length==0){

    Cart.innerHTML = "<h1 class='empty-tag'>CART IS EMPTY! <br>Add something from the Menu<h1>";

  }
  else{

    // DEBUG -> Print list items
    for (i=0;i<cart_items.length;i++)
    {
    console.log(cart_items[i]);
    }


    
    // List all items on cart card
    for (i=0;i<cart_items.length;i++)
    {
      let temp = cart_items[i];

      if(temp.extra_cheese){
        temp.extra_cheese = "&nbsp; &nbsp;|&nbsp; &nbsp; Extra Cheese"
      }
      else{
        temp.extra_cheese = "";
      }

      subTotal += temp.price_each;

      Cart.innerHTML += `
        <div class="card item-card .container">
          <div class="row">
          
            <div id="item1" class="col-xs-2 col-sm-1 col-md-3 col-lg-5 col-xl-4 " >
              <img src=`+temp.img+`>
            </div>
            
            <div id="item2" class="col-xs-2 col-sm-4 col-md-6 col-lg-3">
              <h4>`+temp.name+`</h4>
              <p>`+temp.size+`&nbsp; &nbsp;|&nbsp; &nbsp;`+temp.crust+temp.extra_cheese+`</p>
              <p>Price: `+temp.price_each+`</p>
              <p>Quantity: `+temp.numItems+`</p>
            </div>
            
            <div id="item3" class="col-xs-2 col-sm-3 col-md-2 " >
            <a onclick="remove(id)"id="`+i+`" href="#" class="remove-btn btn btn-primary">Remove</a>
            </div>
          </div>
        </div>
        <hr>
          `
    }

    tax = (0.18) * subTotal;
    total = tax+ subTotal;

    // console.log(subTotal,tax,total)

    Cart.innerHTML += `
      <div class="card item-card .container">
        <p id="end-card">
          Sub total: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;`+subTotal+`
          <br><br>
          Tax (18%): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+tax+`
          <br><br>
          Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+total+`
          <br><br>
          <a onclick="order_place()" href="#" class="btn btn-primary">Place Order</a>
        </p>
      </div>
    `
  }
}

function order_place(){
  alert("Order Placed Successfully");

  cart_items = [];

  localStorage.removeItem("cart_items"); 
  sessionStorage.setItem("cart_items", JSON.stringify(cart_items)); 

    let Cart = document.getElementById("cart_list");


  Cart.innerHTML="<h1 class='empty-tag'>CART IS EMPTY! <br>Add something from the Menu<h1>";

    // CART BUBBLE
  let Cart_Li = document.getElementById("cart-li");
  let cart_itms = JSON.parse(sessionStorage.getItem('cart_items'));
  let l;
  if(cart_itms==null || cart_itms.length==0){
    l=0;
  }
  else{
    l = cart_itms.length;
  }
  Cart_Li.children[1].innerHTML = "&nbsp;"+l+"&nbsp;";

}


function remove(num){
  console.log(num)

  cart_items.splice(num, 1);

  localStorage.removeItem("cart_items"); 
  sessionStorage.setItem("cart_items", JSON.stringify(cart_items)); 

  let Cart = document.getElementById("cart_list");
  let subTotal=0,tax,total;

  Cart.innerHTML="";

  if(cart_items.length == 0){
    Cart.innerHTML += "<h1 class='empty-tag'>CART IS EMPTY! <br>Add something from the Menu<h1>";
  }
  else{

    for (i=0;i<cart_items.length;i++)
    {
      let temp = cart_items[i];

      if(temp.extra_cheese){
        temp.extra_cheese = "&nbsp; &nbsp;|&nbsp; &nbsp; Extra Cheese"
      }
      else{
        temp.extra_cheese = "";
      }

      subTotal += temp.price_each;

      Cart.innerHTML += `
        <div class="card item-card .container">
          <div class="row">
          
            <div id="item1" class="col-xs-2 col-sm-1 col-md-3 col-lg-5 col-xl-4 " >
              <img src=`+temp.img+`>
            </div>
            
            <div id="item2" class="col-xs-2 col-sm-4 col-md-6 col-lg-3">
              <h4>`+temp.name+`</h4>
              <p>`+temp.size+`&nbsp; &nbsp;|&nbsp; &nbsp;`+temp.crust+temp.extra_cheese+`</p>
              <p>Price: `+temp.price_each+`</p>
              <p>Quantity: `+temp.numItems+`</p>
            </div>
            
            <div id="item3" class="col-xs-2 col-sm-3 col-md-2 " >
            <a onclick="remove(id)"id="`+i+`" href="#" class="remove-btn btn btn-primary">Remove</a>
            </div>
          </div>
        </div>
        <hr>
          `
    }

      tax = (0.18) * subTotal;
      total = tax + subTotal;

      Cart.innerHTML += `
        <div class="card item-card .container">
          <p id="end-card">
            Sub total: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;`+subTotal+`
            <br><br>
            Tax (18%): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+tax+`
            <br><br>
            Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`+total+`
            <br><br>
            <a onclick="order_place()" href="#" class="btn btn-primary">Place Order</a>
          </p>
        </div>
      `
  }

  // CART BUBBLE
  let Cart_Li = document.getElementById("cart-li");
  let cart_itms = JSON.parse(sessionStorage.getItem('cart_items'));
  let l;
  if(cart_itms==null || cart_itms.length==0){
    l=0;
  }
  else{
    l = cart_itms.length;
  }
  Cart_Li.children[1].innerHTML = "&nbsp;"+l+"&nbsp;";
}

