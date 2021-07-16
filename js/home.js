var d = new Date();
var day = d.getDay();

let Offer;
let OfferDay="";
let OfferText="";

// Saturday -> budget veg
if(day==6){
  Offer = "budget_veg"
  OfferText="Budget Veg";
  OfferDay = "Saturday"
}
// Sunday - > budget non veg 
else if(day==0){
  Offer = "budget_nv"
  OfferText="Budget Non-Veg";
 OfferDay = "Sunday"
}
// monday - > prem veg
else if(day==1){
  Offer = "prem_veg"
  OfferText="Premium Veg";
  OfferDay = "Monday"
}
// tue -> prem non veg
else if(day==2){
  Offer ="prem_nv"
  OfferText="Premium Non-veg";
  OfferDay = "Tuesday"
}
console.log(day);
console.log(Offer);
console.log(OfferDay);

window.sessionStorage.setItem("Offer", JSON.stringify(Offer));

window.onload = function(){
  offer_span = document.getElementById("offer_span");
  offer_day = document.getElementById("offer_day")

  offer_span.innerHTML = OfferText;
  offer_day.innerHTML = OfferDay;

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
}