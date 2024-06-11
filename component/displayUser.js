console.log("I am in Display User");
import  get from "./getElement.js";
import fetchUser from "./fetchUser.js";

// console.log("displyUser Data00 : ",data);
// console.log(data.large);
const image = get('.user-img');
console.log("image : ",image);
image.src = "./swatikaAnimated.gif";
const userTitle = get(".user-title");
console.log("UserTitle : ",userTitle);
const userValue = get('.user-value');
console.log("userValue : ",userValue);
const Btns = document.querySelectorAll('.icon');
console.log("Btns : ",Btns);
console.log("type of : ", typeof Btns);
function name ( myname){
    console.log("Name button is Cliked");
    userTitle.innerHTML = "My Name Is ";
    userValue.innerHTML = myname;
}
function emails (myemail){
    userTitle.innerHTML = "My email Is ";
    userValue.innerHTML = myemail;
}
function birthday (myBirthDay){
    userTitle.innerHTML = "My BirthDay  On ";
    userValue.innerHTML = myBirthDay;
}
function adress (myAdress){
    userTitle.innerHTML = "My Contry  Is ";
    userValue.innerHTML = myAdress;
}
function phoneNO (myPhone){
    userTitle.innerHTML = "My phone No  Is ";
    userValue.innerHTML = myPhone;
}
function passward (mypassward){
    userTitle.innerHTML = "My password  Is ";
    userValue.innerHTML = mypassward;
}
 const func = [name,emails,birthday,adress,phoneNO,passward];
 const Atribute =  ['name','email','date','country','phone', 'password' ];
 const displayUser = async ()=>{
    
    // container.classList.remove("page");
    console.log("I am in Display User function");
    const data = await fetchUser();
  
    console.log("displyUser Data01 : ",data);
    console.log("image.src : ",data.large);
    image.src = data.large;
    name ( data.name);
    Btns.forEach((btn,idx)=>{
            btn.addEventListener('click', function(){
                console.log("bigDat : ",data,"typeof ", typeof data);
                console.log("CallFunction : ",func[idx],"Atrribute : ",Atribute[idx]);
                // console.log(`hello`);
                func[idx](data[Atribute[idx]])
                
            });
    })
    // name(data.name);
    // emails(data.email);
    // birthday(data.birthday);
    // adress(data.location);
    // phoneNO(data.phone);
    // passward(data.password);

}
export default displayUser;