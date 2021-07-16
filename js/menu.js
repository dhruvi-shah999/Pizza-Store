const pizzaList = [
  //Veg Pizzas

  // BUDGET PIZZAS veg
  {
    name:"Margherita",
    info:"Classic delight with 100% real mozzarella cheese",
    img:"./images/v_margherita.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
  },
  {
    name:"Cheese n Tomato",
    info:"A delectable combination of cheese and juicy tomato",
    img:"./images/v_cheese_and_tomato.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
  },
  {
    name:"Farmhouse",
    info:"Delightful combination of onion, capsicum, tomato & grilled mushroom",
    img:"./images/v_farmhouse.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
  },
  {
    name:"Peppy Paneer",
    info:"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    img:"./images/v_peppy_paneer.jpg",
    price_s: "150",
    price: "250",
    price_l:"325",
    crust_pan:"25",
    crust_wheat:"35",
    ex_cheese:"70",
    category : "budget_veg"
  },

  // Expensive Pizzas veg
  {
    name:"Mexican Green Wave",
    info:"Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
    img:"./images/v_mexican_green_wave.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_veg"
  },
  {
    name:"Deluxe Veggie",
    info:"Veg delight - onion, capsicum, grilled mushroom, corn & paneer",
    img:"./images/v_deluxe_veggie.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_veg"
  },
  {
    name:"Veg Extravaganza",
    info:"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese",
    img:"./images/v_veg_extravaganza.jpg",
    price_s: "250",
    price: "350",
    price_l:"425",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_veg"
  },
  // Budget pizzas non-veg
  {
    name: "Pepper Barbecue Chicken",
    info: "Pepper barbecue chicken for that extra zing",
    img: "./images/n_pepper_barbeque_chicken.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
  },
  {
    name:"Chicken Fiesta",
    info:"Grilled chicken rashers, peri-peri chicken, onion & capsicum, a complete fiesta",
    img:"./images/n_chicken_fiesta.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
  },
  {
    name:"Chicken Golden Delight",
    info:"Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    img:"./images/n_chicken_golden_delight.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
  },
  {
    name:"Chicken Dominator",
    info:"Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka.",
    img:"./images/n_chicken_dominator.jpg",
    price_s: "200",
    price: "300",
    price_l:"400",
    crust_pan:"35",
    crust_wheat:"45",
    ex_cheese:"70",
    category : "budget_nv"
  },
  // Expensive pizzas non-veg
  {
    name:"Chicken Pepperoni",
    info:"A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    img:"./images/n_chickenpepperoni.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_nv"
  },
  {
    name: "Non Veg Supreme",
    info: "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken",
    img: "./images/n_non_veg_supreme.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_nv"
  },
  {
    name: "Tandoori Chicken Tikka",
    info: "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    img: "./images/n_tandoori_chicken_tikka.jpg",
    price_s: "275",
    price: "375",
    price_l:"450",
    crust_pan:"45",
    crust_wheat:"55",
    ex_cheese:"100",
    category : "prem_nv"
  }
]

const cardsArray = [];
var temp = "card";
let cardID = '';

window.onload = function(){

  for(let i=0;i<pizzaList.length;i++){
    cardID = temp + (i+1).toString(); 
    cardsArray.push(document.getElementById(cardID));

    cardsArray[i].children[0].src=pizzaList[i].img;;
    cardsArray[i].children[1].children[0].textContent = pizzaList[i].name;
    cardsArray[i].children[1].children[1].textContent = pizzaList[i].info;
  }

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

};

function sendCardID(num){

  window.location.href = './customize.html?cardID='+num;


}

// cardsArray.push(document.getElementById('card1'));

// cardsArray[0].children[0].src=pizzaList[0].img;





