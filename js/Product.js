
import {cartMessage,cartPopup,cartMessagediv}from '../js/index.js';


// let productUserIcon=document.querySelector('#icon2');
// console.log(productUserIcon);
// productUserIcon.appendChild(signUp);

//userIcon1 EventListener
// //userIcon2 EventListener
// userIcon2.appendChild(signUp);
// userIcon2.removeEventListener('click',auth);

// icon3.style.display="block";
// sideNavDivision.style.display="block";
// sideNavDivision.style.zIndex="5";
// //sideNav EventListener
// console.log(icon3);
// window.addEventListener('resize',sideNavDisplay);

// console.log('secondpage');

if(sessionStorage.getItem('cartItems'))
{
const items=JSON.parse(sessionStorage.getItem('cartItems'));
cartMessagediv.innerHTML=items;
console.log(items);
}

//Product Price Range
let idForPrice=1;
let range=document.querySelector('input[type="range"]');
range.setAttribute('min','0');
range.setAttribute('max','3000');
console.log(range);
document.querySelectorAll('.priceslider span').forEach((item)=>{
  item.id=`PriceRange-${idForPrice++}`;
  console.log(item);
});
let priceRangeHandler=(event)=>{
  if(event.target.value>0)
  {
    document.getElementById('PriceRange-1').innerText=`$${event.target.value}`;
  }
  else if(event.target.value==0)
  {
      document.getElementById('PriceRange-1').innerText="$0";
  }
}

range.addEventListener('change',priceRangeHandler);



//multi page
let pages=[];
let productpage1=document.querySelector('.products');
// productpage1.filter((item)=>{
//   return item!=document.querySelector('nav-link');
// });
pages.push(productpage1);
console.log(pages[0]);
let page1=document.querySelector('.page_number-1');
let page2=document.querySelector('.page_number-2');
let targetParent=document.querySelector('.part3');
fetch('Productpage2.html').then((response)=>
  {
    if(response.ok)
    {
      return response.text();
    }
    else
    {
      console.error("No Page Present in server");
    }
  }).then(data=>
    {
      pages.push(data);
      console.log("verifying --->loading of next page");
      // console.log(pages[1]);
    });
page1.addEventListener('click',(event)=>{
  if(productpage1.innerHTML===document.querySelector('.products'))
  {
      productpage1.innerHTML=pages[0];
      event.preventDefault();
  }
});
page2.addEventListener('click',(event)=>{
  if(productpage1.innerHTML===pages[0])
  {
      productpage1.innerHTML=null;
      productpage1.innerHTML=pages[1];
      console.log("after replaceing...");
      // console.log(pages[1]);
      event.preventDefault();
  }
});
page1.style.backgroundColor="#A52A2A";
// console.log("------1-------");
// console.log(pages[0]);
// console.log("------2-------");
// console.log(pages[1]);



//color option
let colorlist=document.querySelector('.colorslist');
colorlist.addEventListener('click',(event)=>{
  // console.log(event.target.className);
  let color=window.getComputedStyle(event.target);
  let tgt=document.querySelectorAll('.taq');
  tgt.forEach((item)=>{
      item.style.backgroundColor=color.backgroundColor;
      item.style.color="white";
  });
  event.preventDefault();
});

//subscription option
let warningPopUp=document.createElement('div');
warningPopUp.style.width="140px";
warningPopUp.style.height="30px";
warningPopUp.style.position="relative";
warningPopUp.style.left="60px";
warningPopUp.style.bottom="10px";
warningPopUp.style.top="-10px";
warningPopUp.style.borderRadius="10px";
warningPopUp.style.backgroundColor="#FFBD00";
warningPopUp.style.color="black";
let subscriptionParent=document.querySelector('.subscription');
subscriptionParent.appendChild(warningPopUp);
let loading=document.createElement('div');
warningPopUp.appendChild(loading);
loading.style.position="absolute";
loading.style.left="2px";
loading.style.backgroundColor="red";
loading.style.width="5px";
loading.style.height="1%";
let warningMsg=document.createElement('span');
warningMsg.style.position="absolute";
warningMsg.innerText="invalid";
warningMsg.style.top="10px";
warningMsg.style.left="50px";
warningPopUp.appendChild(warningMsg);
loading.style.paddingTop="10px";
loading.style.borderTopLeftRadius="10px";
loading.style.borderTopRightRadius="10px";
//subscription
let inputemail=document.querySelector('.form_elements input');
let inputButton=document.querySelector('.form_elements button');
inputemail.style.zIndex='3';
warningPopUp.style.display="none";
let loadcount=0;
let loader=0;
let warningFunction=0;
inputButton.addEventListener('click',(event)=>{
  console.log("warning..event");
  warningFunction=()=>{
    warningPopUp.style.display="block";
     loader=setInterval(()=>{
     loadcount++;
     loading.style.width=`${loadcount}%`;
     if(loadcount>=95)
     {
       warningPopUp.style.display="none";
       loadcount=0;
       clearInterval(loader);
     }
    },25);
   }
  if(inputemail.value=='')
  {
    warningFunction();
  }
  else{
    let input=new String(inputemail.value);
    console.log(typeof input);
     if(!(input.includes('@gmail.com'))||(input.indexOf('@')==0))
     {
        warningFunction();
     }
     else
     {
      alert(`successfully subscribed::${input}`)
     }
  }
});


// document.addEventListener('DOMContentLoaded',()=>{
//   if(userIcon2)
//   {
//   // userIcon2.appendChild(signUp);
//   userIcon2.onclick=auth;
//   }
//   else
//   {
//     console.log('not present');
//   }
// });
