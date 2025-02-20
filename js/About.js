import{cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems')&&sessionStorage.getItem('subtotal'))
  {
  const items=JSON.parse(sessionStorage.getItem('cartItems'));
  const rate=JSON.parse(sessionStorage.getItem('subtotal'));
  cartMessagediv.innerHTML=items;
  subTotal.innerText=rate;
  console.log(items);
  }

