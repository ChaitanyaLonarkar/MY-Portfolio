// let kgRef=document.getElementById('kg');
// let gmRef=document.getElementById('gm');
// let poRef=document.getElementById('po');
// let ouRef=document.getElementById('ou');
// let stRef=document.getElementById('st');

// function fromkg() {
//   let kg=kgRef.value;
//   gmRef.value=(kg*1000).toFixed(2);
//   poRef.value=(kg*2.2046).toFixed(2);
//   ouRef.value=(kg*35.275).toFixed(2);
//   stRef.value=(kg*0.1574).toFixed(2);

//   // tofixe(20) mean limits the decimal to 2 digit
 
// }
// function fromgm() {
//   let gm=gmRef.value;
//   kgRef.value=(gm/1000).toFixed(2);
//   poRef.value=(gm*0.0022046).toFixed(2);
//   ouRef.value=(gm*0.035275).toFixed(2);
//   stRef.value=(gm*0.0001574).toFixed(2);
 
// }function fromst() {
//   let st=stRef.value;
//   gmRef.value=(st/0.0001574).toFixed(2);
//   poRef.value=(st*14).toFixed(2);
//   ouRef.value=(st*224).toFixed(2);
//   kgRef.value=(st/0.1574).toFixed(2);
 
// }function fromou() {
//   let ou=ouRef.value;
//   gmRef.value=(ou/0.035274).toFixed(2);
//   poRef.value=(ou/0.0625).toFixed(2);
//   kgRef.value=(ou/35.275).toFixed(2);
//   stRef.value=(ou*0.0044643).toFixed(2);
 
// }

// kgRef.addEventListener('input',fromkg);
// gmRef.addEventListener('input',fromgm);
// ouRef.addEventListener('input',fromou);
// stRef.addEventListener('input',fromst);




document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");
  container.classList.add("animate");
});


// horizontal sroll
// const scrollContainer = document.getElementById("projects");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });
const element = document.querySelector(".projects");
console.log(element)
// console.log(scrollContainer)

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});
