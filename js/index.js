//sign up start--------->
let count = 0;
let signUp = document.createElement("div");
let userIcon2 = document.getElementById("icon2");
userIcon2.appendChild(signUp);
userIcon2.onclick = auth;
let isOpen = false;
let horizontalLine = document.createElement("hr");
function auth(event) {
  count++;
  if (count == 1) {
    //1)Login Register division
    let loginRegister = document.createElement("div");
    signUp.appendChild(loginRegister);
    signUp.className = "sign_up";
    //1.1)Login element Creation
    let login = document.createElement("a");
    login.href = "#";
    login.textContent = "Login";
    //1.2)Register Element Creation
    let register = document.createElement("a");
    register.href = "#";
    register.textContent = "Register";

    //Login and Register appending to the loginregister division
    loginRegister.appendChild(login);
    loginRegister.appendChild(register);

    //css for loginregister
    loginRegister.className = "login-register";

    //2)HorizontalLine after the Loginregister

    signUp.appendChild(horizontalLine);

    //3)Input textBoxCreation
    //3.1)Email textbox
    let email = document.createElement("input");
    email.type = "text";
    email.placeholder = "Email";
    email.className = "textbox";
    signUp.appendChild(email);

    //from email to parent bubbling prevention
    email.addEventListener("click", (event) =>
      event.stopImmediatePropagation()
    );

    //3.2)password textbox
    let passWord =
      email.cloneNode(
        false
      ); /*clone method to shallow clone which avoid child element*/
    passWord.type = "password";
    passWord.placeholder = "Password";
    signUp.appendChild(passWord);
    console.log(passWord);

    //from password to parent bubbling prevention
    passWord.addEventListener("click", (event) =>
      event.stopImmediatePropagation()
    );

    //4)Remember Me
    let remberMebox = document.createElement("div");
    signUp.appendChild(remberMebox);
    remberMebox.className = "rememberMe";
    //cloning
    let remeberMe = email.cloneNode(false);
    remeberMe.type = "checkbox";
    remeberMe.setAttribute("id", "remember");
    //
    let remeberMeLabel = document.createElement("label");
    remeberMeLabel.setAttribute("for", "remember");
    let remeberMeText = document.createTextNode("Remember me");
    remberMebox.addEventListener("click", (event) =>
      event.stopImmediatePropagation()
    );

    remeberMeLabel.appendChild(remeberMeText);
    remberMebox.appendChild(remeberMe);
    remberMebox.appendChild(remeberMeLabel);

    //5)LoginButton
    let loginButton = document.createElement("button");
    loginButton.className = "login_button";
    loginButton.textContent = "login";
    signUp.appendChild(loginButton);
    loginButton.className = "login1";

    //breakline
    let breakLine = document.createElement("br");
    signUp.appendChild(breakLine);

    //6)ForgetPassword
    let forgetPassword = document.createElement("a");
    forgetPassword.innerText = "Forget Your Password?";
    forgetPassword.href = "#";
    forgetPassword.addEventListener("click", (event) => event.preventDefault());

    forgetPassword.setAttribute("class", "forgetpassword");
    signUp.appendChild(forgetPassword);
    signUp.style.display = "block";

    //1)Login Event
    login.addEventListener("click", (event) => {
      register.removeEventListener("click", registerEvent);
      remberMebox.style.display = "block";
      loginButton.innerText = "Login";
      forgetPassword.style.display = "block";
      signUp.style.height = "fit-content";
      event.stopImmediatePropagation();
    });

    //2)Register Event
    let registerEvent = register.addEventListener("click", (event) => {
      remberMebox.style.display = "none";
      loginButton.innerText = "Register";
      forgetPassword.style.display = "none";
      signUp.style.height = "fit-content";
      event.stopImmediatePropagation();
    });
    isOpen = true;

    console.log(userIcon2);
  } else if (!isOpen) {
    signUp.style.display = "block";
    isOpen = true;
  } else {
    signUp.style.display = "none";
    isOpen = false;
  }
}
//<------------------signUp end

//cart start-------->
//finding icon for cart button which is hidden
let id = 0;
let itemStorage = [];
let targetCartButton = document.querySelectorAll(".search");
targetCartButton.forEach((item) => {
  item.setAttribute("id", `cart-${id++}`);
});
//products Array
let individualProducts = document.querySelectorAll(".box");
// console.log(individualProducts);
individualProducts.forEach((items) => {
  let targetCartButton = items.querySelector(".productdetails");
  console.log("target value", targetCartButton);

  let cloneProductDetails = targetCartButton.cloneNode(true);
  itemStorage.push(cloneProductDetails);
});
console.log(itemStorage);
console.log("item storage", itemStorage);

// individual products Add To cart Button
let cart0 = document.getElementById("cart-0");
let cart1 = document.getElementById("cart-1");
let cart2 = document.getElementById("cart-2");
let cart3 = document.getElementById("cart-3");

let subTotalValue = 0;
let cartPopup = document.createElement("div");
let userIcon1 = document.getElementById("icon1");
userIcon1.appendChild(cartPopup);

userIcon1.parentElement.href = "#";
let cartMessage = document.createElement("h3");
//cartPop inside element
let head = document.createElement("span");
head.style.display = "block";
head.innerText = "Shopping Cart";
//shopping cart text appended
cartPopup.appendChild(head);
let horizontalLine2 = document.createElement("hr");
//hr appended
cartPopup.appendChild(horizontalLine2);
horizontalLine2.style.width = "80%";
horizontalLine2.style.margin = "20px";
horizontalLine2.style.fontWeight = "100";
head.style.margin = "20px";
let cartMessagediv = document.createElement("div");
cartPopup.appendChild(cartMessagediv);

cartMessagediv.appendChild(cartMessage);
cartMessagediv.style.display = "flex";
cartMessagediv.style.flexDirection = "column";
cartMessagediv.style.gap = "20px";

cartMessage.textContent = "No items";
cartMessage.style.textAlign = "center";
cartMessage.style.fontSize = "initial";
cartMessage.style.marginBottom = "15px";
let totalContainer = document.createElement("div");
//totalcontainer appended
cartPopup.appendChild(totalContainer);
let subTotal = document.createElement("span");
subTotal.textContent = `SubTotal:$${subTotalValue}`;
totalContainer.style.marginBottom = "20px";
totalContainer.style.marginTop = "30px";
totalContainer.style.marginLeft = "30px";
//subtotal extracted value

totalContainer.appendChild(subTotal);
let viewBagButton = document.createElement("button");
viewBagButton.innerText = "view bag";
let checkout = document.createElement("button");
checkout.innerText = "checkout";
let buttons = document.createElement("div");
//buttons appended
cartPopup.appendChild(buttons);
buttons.appendChild(viewBagButton);
buttons.appendChild(checkout);
buttons.style.display = "flex";
buttons.style.justifyContent = "space-around";
buttons.style.paddingBottom = "25px";
buttons.className = "adbanner button";
buttons.style.position = "initial";
cartPopup.style.display = "none";

let cartFun = (event) => {
  cartPopup.className = "cartButton";
  if (!isOpen) {
    isOpen = true;
    cartPopup.style.display = "block";
  } else {
    cartPopup.style.display = "none";
    isOpen = false;
  }
};
//cartIcon eventlistener main
userIcon1.addEventListener("click", cartFun);
//addtocart function

function addToCart(product) {
  switch (product) {
    case "cart-0":
      {
        if (!cartPopup.contains(itemStorage[0])) {
          cartMessage.remove();
          //taking price from the productdetails and converting to number
          let rateString =
            itemStorage[0].querySelector(".pricevalues span").innerText;
          itemStorage[0].querySelector('img[alt="Ratings"]').style.marginLeft =
            "40px";
          itemStorage[0].querySelector(
            'img[alt="Ratings"]'
          ).style.marginBottom = "10px";
          let rate = "";
          rateString.split("").forEach((item) => {
            if (item !== "$") {
              rate += item;
            }
          });
          cartMessagediv.append(itemStorage[0]);
          subTotalValue += Number(rate);
          subTotal.textContent = `SubTotal:$${subTotalValue}`;
          console.log("extracted Price::" + subTotalValue);
          console.log(itemStorage[0]);
          sessionStorage.setItem(
            "cartItems",
            JSON.stringify(cartMessagediv.outerHTML)
          );
          sessionStorage.setItem("subtotal", JSON.stringify(subTotalValue));
          alert("successfully added to cart...");
        } else {
          alert("already added...");
        }
      }
      break;
    case "cart-1":
      {
        if (!cartPopup.contains(itemStorage[1])) {
          cartMessage.remove();
          let rateString =
            itemStorage[1].querySelector(".pricevalues span").innerText;
          itemStorage[1].querySelector('img[alt="Ratings"]').style.marginLeft =
            "40px";
          itemStorage[1].querySelector(
            'img[alt="Ratings"]'
          ).style.marginBottom = "10px";
          let rate = "";
          rateString.split("").forEach((item) => {
            if (item !== "$") {
              rate += item;
            }
          });
          cartMessagediv.append(itemStorage[1]);
          subTotalValue += Number(rate);
          subTotal.textContent = `SubTotal:$${subTotalValue}`;
          console.log("extracted Price::" + subTotalValue);
          sessionStorage.setItem(
            "cartItems",
            JSON.stringify(cartMessagediv.outerHTML)
          );
          sessionStorage.setItem("subtotal", JSON.stringify(subTotalValue));
          alert("successfully added to cart...");
        } else {
          alert("already added...");
        }
      }
      break;
    case "cart-2":
      {
        if (!cartPopup.contains(itemStorage[2])) {
          cartMessage.remove();
          let rateString =
            itemStorage[2].querySelector(".pricevalues span").innerText;
          itemStorage[2].querySelector('img[alt="Ratings"]').style.marginLeft =
            "40px";
          itemStorage[2].querySelector(
            'img[alt="Ratings"]'
          ).style.marginBottom = "10px";
          let rate = "";
          rateString.split("").forEach((item) => {
            if (item !== "$") {
              rate += item;
            }
          });
          cartMessagediv.append(itemStorage[2]);
          subTotalValue += Number(rate);
          subTotal.textContent = `SubTotal:$${subTotalValue}`;
          console.log("extracted Price::" + subTotalValue);
          sessionStorage.setItem(
            "cartItems",
            JSON.stringify(cartMessagediv.outerHTML)
          );
          sessionStorage.setItem("subtotal", JSON.stringify(subTotalValue));
          alert("successfully added to cart...");
        } else {
          alert("already added...");
        }
      }
      break;
    case "cart-3":
      {
        if (!cartPopup.contains(itemStorage[3])) {
          cartMessage.remove();
          let rateString =
            itemStorage[3].querySelector(".pricevalues span").innerText;
          itemStorage[3].querySelector('img[alt="Ratings"]').style.marginLeft =
            "40px";
          itemStorage[3].querySelector(
            'img[alt="Ratings"]'
          ).style.marginBottom = "10px";
          let rate = "";
          rateString.split("").forEach((item) => {
            if (item !== "$") {
              rate += item;
            }
          });
          cartMessagediv.append(itemStorage[3]);
          subTotalValue += Number(rate);
          subTotal.textContent = `SubTotal:$${subTotalValue}`;
          console.log("extracted Price::" + subTotalValue);
          sessionStorage.setItem(
            "cartItems",
            JSON.stringify(cartMessagediv.outerHTML)
          );
          sessionStorage.setItem("subtotal", JSON.stringify(subTotalValue));
          alert("successfully added to cart...");
        } else {
          alert("already added...");
        }
      }
      break;
  }
}
//item detail 
if(sessionStorage.getItem('cartItems')&&sessionStorage.getItem('subtotal'))
  {
  const items=JSON.parse(sessionStorage.getItem('cartItems'));
  const rate=sessionStorage.getItem('subtotal');
  cartMessagediv.innerHTML=items;
  subTotal.innerText=`subTotal::$${rate}`;
  console.log(items);
  }
// eventListener for adding item to the cart
if(document.documentElement.contains(cart0)&&document.documentElement.contains(cart1)&&document.documentElement.contains(cart2)&&document.documentElement.contains(cart3)){
  cart0.addEventListener("click", (event) => {
    addToCart(event.target.id);
    event.preventDefault();
  });
  cart1.addEventListener("click", (event) => {
    addToCart(event.target.id);
    event.preventDefault();
  });
  cart2.addEventListener("click", (event) => {
    addToCart(event.target.id);
    event.preventDefault();
  });
  cart3.addEventListener("click", (event) => {
    addToCart(event.target.id);
    event.preventDefault();
  });
}
// <----------------------cart end

//------------------>side navbar
let icon3 = document.querySelector("#icon3");
// console.log(icon3);
//side navbar element creation
let sideNavDivision = document.createElement("div");
sideNavDivision.className = "sidebar";
let listOfNav = document.createElement("ul");
let navLists = 0;
let navTexts = ["HOME", "SHOP", "PAGES", "BLOGS", "ABOUT"];
for (let i = 0; i <= 4; i++) {
  navLists = document.createElement("li");
  let anchortaq = document.createElement("a");

  console.log("check anchor taq");
  console.log(anchortaq);
  console.log("check anchor taq");
  //anchor navigation
  if (navTexts[i] === "HOME") {
    anchortaq.setAttribute(
      "href",
      "index.html"
    );
  } else if (navTexts[i] === "SHOP") {
    anchortaq.setAttribute(
      "href",
      "Products.html"
    );
  } else if (navTexts[i] === "PAGES") {
    anchortaq.setAttribute(
      "href",
      "Pages.html"
    );
  } else if (navTexts[i] === "BLOGS") {
    anchortaq.setAttribute(
      "href",
      "Blogs.html"
    );
  } else if (navTexts[i] === "ABOUT") {
    anchortaq.setAttribute(
      "href",
      "About.html"
    );
  }

  anchortaq.innerText = navTexts[i];
  anchortaq.style.textDecoration = "none";
  navLists.appendChild(anchortaq);
  navLists.style.padding = "10px";
  navLists.id = `List-${i}`;
  listOfNav.appendChild(navLists);
  if (i != 12) {
    listOfNav.appendChild(document.createElement("hr"));
  }
}
console.log("After checking navTexts is present in heap::" + navTexts);
document.body.appendChild(sideNavDivision);
let closeButton = document.createElement("button");
closeButton.innerText = "X";
closeButton.style.fontSize = "1rem";
closeButton.style.padding = "0.5em";
closeButton.style.backgroundColor = "red";
closeButton.style.color = "white";
closeButton.style.border = "none";
sideNavDivision.appendChild(closeButton);

sideNavDivision.appendChild(listOfNav);
sideNavDivision.style.padding = "20px";
listOfNav.style.listStyleType = "none";
sideNavDivision.style.display="none";

//mediaquery for sidenav
let breakPoint = window.matchMedia("(min-width:320px) and (max-width:1200px)");

function screenChangeDetection(breakPoint){
if (breakPoint.matches) {
  console.log("medium size::",document.documentElement.clientWidth);
  icon3.style.display = "block";
  icon3.addEventListener("click", (event) => {
    localStorage.setItem('sideNav','open');
    sideNavDivision.style.display = "block";
    closeButton.addEventListener("click", (event) => {
      localStorage.setItem('sideNav','close');
      sideNavDivision.style.display = "none";
      event.stopPropagation();
    });
    event.stopImmediatePropagation();
    event.preventDefault();
  });
} else {
  icon3.style.display = "none";
  sideNavDivision.style.display="none";
}
}


screenChangeDetection(breakPoint);
breakPoint.addEventListener('change',(event)=>{
  screenChangeDetection(breakPoint)
});

//state presistance for  next page
if(localStorage.getItem('sideNav')==='open')
{
  sideNavDivision.style.display="block";
    closeButton.addEventListener("click", (event) => {
      localStorage.setItem('sideNav','close');
      sideNavDivision.style.display = "none";
      event.stopPropagation();
    });
}

let timerResources=document.querySelectorAll('.circle');

//offer Timer
  if(timerResources.length===4)
  {
  let idForTime = 1;

  for (let i = 0; i < 4; i++) {
    let secs = document.querySelector(`#secs-${idForTime}`);
    let mins = document.querySelector(`#mins-${idForTime}`);
    let hrs = document.querySelector(`#hrs-${idForTime}`);
    let days = document.querySelector(`#days-${idForTime}`);

    //timerObject
    new timer(secs, mins, hrs, days);
    idForTime++;
  }
  }
//template for timer
function timer(secs, mins, hrs, days) {
  let secsCount = 60;
  let minNumber = 59;
  let hrNumber = 12;
  let dayNumber = 5;

  let offerDeadline = () => {
    if (minNumber == 0 && hrNumber == 0 && dayNumber == 0 && secsCount == 0) {
      stopTimer();
    } else {
      if (secsCount == 0) {
        if (minNumber == 0) {
          if (hrNumber == 0) {
            dayNumber--;
            days.innerText = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
            hrNumber = 24;
            minNumber = 60;
          }
          hrNumber--;
          hrs.innerText = hrNumber < 10 ? `0${hrNumber}` : hrNumber;
          minNumber = 60;
        }
        minNumber--;
        mins.innerText = minNumber < 10 ? `0${minNumber}` : minNumber;
        secsCount = 60;
      }
      secsCount--;
      secs.innerText = secsCount < 10 ? `0${secsCount}` : secsCount;
    }
  };
  function stopTimer() {
    days.innerText = "00:";
    hrs.innerText = "00:";
    mins.innerText = "00:";
    secs.innerText = "00:";
    clearInterval(offerDeadline);
  }
  setInterval(offerDeadline, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("contextmenu",(event)=>{
    event.preventDefault();
  });
  console.warn = () => {};
  console.clear();
});


export { cartMessage, cartPopup, cartMessagediv,subTotal,subTotalValue, timer };
// export {userIcon2,auth};
