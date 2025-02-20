import{cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems')&&sessionStorage.getItem('subtotal'))
  {
  const im=JSON.parse(sessionStorage.getItem('cartItems'));
  const rate=JSON.parse(sessionStorage.getItem('subtotal'));
  subTotal.innerText=rate;
  cartMessagediv.innerHTML=im;
  }