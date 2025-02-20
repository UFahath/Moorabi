import{subTotal,cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems')&&sessionStorage.getItem('subtotal'))
  {
  const items=JSON.parse(sessionStorage.getItem('cartItems'));
  const rate=sessionStorage.getItem('subtotal');
  cartMessagediv.innerHTML=items;
subTotal.innerText=`subTotal::$${rate}`;
  console.log(items);
  }

