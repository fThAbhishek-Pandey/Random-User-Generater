const getElement = (selection)=>{
     const element = document.querySelector(selection);
     console.log("element : ",element);
     if(element) return element;
     else throw new Error(`Please use right ${selection}`);
}
export default getElement;