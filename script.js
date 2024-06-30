const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropDowns=document.querySelectorAll(".dropDown select");

const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select ")
const toCurr=document.querySelector(".to select ")
const msg=document.querySelector(".msg")

for(let select of dropDowns){
    for (currCode in countryList) {
        let newOption=document.createElement("option")
        newOption.innerHTML=currCode;
         newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target);
});
}

const updateFlag=(element)=>{
  let currCode= element.value;
let countryCode=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img =  element.parentElement.querySelector("img");
img.src = newSrc;
    };
btn.addEventListener("click",async(e)=>{
    e.preventDefault();
let amount=document.querySelector(".amount input");
let amtval=amount.value;
if(amtval===""||amtval<  1){
    amtval=1;
amount.value="1";

}

const URL= `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data=await response.json()
let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];


let famt= amtval*rate;
msg.innerText=`${amtval} ${fromCurr.value} =${famt} ${toCurr.value}`
});

// const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// const drop= document.querySelectorAll(".form select");
// const fromCurr=document.querySelector(".from select ")
// const toCurr=document.querySelector(".to select ")
//  const btn=document.querySelector(".convert button");
//  const msg=document.querySelector(".msg")

// for(let select of drop){
//     for( currCode in countryList){
     
//          let add=document.createElement("option");
//         add.innerHTML=currCode;
//         add.value=currCode;
//         if(select.name==="from" && currCode==="USD"){
//             add.selected="selected";
//         } 
//         else if(select.name==="to" && currCode==="INR"){
//             add.selected="selected";
//         }
//         select.append(add);
//      }

// };
// btn.addEventListener("click",async(e)=>{
// e.preventDefault();
// let amount=document.querySelector(".amount input");
// let amtval=amount.value;
// if(amtval===""||amtval<1){
// amtval=1;
// amount.value="1";
// }
// const url=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
// let response=await fetch(url);
// let data= await response.json();
// let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
// let finalAmt=amtval*rate;
// msg.innerText=`${amtval} ${fromCurr.value}=${finalAmt} ${toCurr.value}`
// });
