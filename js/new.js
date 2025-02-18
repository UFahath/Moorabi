
let signUp = document.createElement("div");
document.body.appendChild(signUp);
signUp.className='sign_up';
let ele=new NewElement('div',signUp);
let ele1=new NewElement('hr',signUp);
let ele2=new NewElement('input',signUp);
let ele3=new NewElement('input',signUp);
let ele4=new NewElement('div',signUp);
let ele5=new NewElement('button',signUp);
let ele6=new NewElement('br',signUp);
let ele7=new NewElement('a',signUp);

console.log(signUp);

function NewElement(element,pare){
  
  this.element=document.createElement(element);
  pare.appendChild(this.element);
}

export default NewElement;
// console.log(NewElement.prototype.constructor());