console.log("I am in apps function and going to use module fetchuser");
import fethData  from "./component/fetchUser.js";
import displayUser from "./component/displayUser.js";

const randomBtn = document.querySelector('.shuffle');
// const container = document.querySelector(".page");
// container.innerHTML = `<img src="swatikaAnimated.gif" alt ="">`;
const start = async ()=>{
    const data = await fethData();
    console.log(fethData);
    console.log("appDATA : ",data);
    displayUser();
}
window.addEventListener('DOMContentLoaded',start);
randomBtn.addEventListener('click',start);
