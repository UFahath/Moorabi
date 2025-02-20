import{cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems'))
  {
  const items=JSON.parse(sessionStorage.getItem('cartItems'));
  cartMessagediv.innerHTML=items;
  console.log(items);
  }