const url ='https://randomuser.me/api/';
console.log(" I am fetch user");
const fethData = async (a,b )=>{
  console.log("I am fetch data function");
  const responce =  await fetch(url);
  const data = await responce.json();
  console.log("data : ",data);
  const person = data.results[0];
  console.log("person : ",person);
  const {first,last } = person.name;
  const name = `${first} ${last}`
  console.log(person.name);
  console.log("name : ",first," ",last);
  const {country} = person.location;
  console.log("location : ",country);
  const email = person.email;
  console.log("email : ",email);
  const {date, age} = person.dob;
  console.log("date : ",date,"age : ",age);
  const {password} = person.login;
  console.log("passward : ",password);
  const phone = person.phone;
  const { large} = person.picture;
  console.log("large : ",large);
  console.log(phone);
  return { large, name ,email,date, age,country,phone, password };
}
export default fethData;