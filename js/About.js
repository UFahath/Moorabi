import{} from '../js/index.js'
if(sessionStorage.getItem('cartItems'))
  {
  const items=JSON.parse(sessionStorage.getItem('cartItems'));
  cartMessage.remove();
  cartMessagediv.innerHTML=items;
  console.log(items);
  }

