import{cartMessagediv} from '../js/index.js'
if(sessionStorage.getItem('cartItems'))
  {
  const im=JSON.parse(sessionStorage.getItem('cartItems'));
  cartMessagediv.innerHTML=im;
  console.log(items);
  }