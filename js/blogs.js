import{subTotal,cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems')&&sessionStorage.getItem('subtotal'))
  {
  const im=JSON.parse(sessionStorage.getItem('cartItems'));
  const rate=sessionStorage.getItem('subtotal');
  subTotal.innerText=`subTotal::$${rate}`;
  cartMessagediv.innerHTML=im;
  }