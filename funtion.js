const name=document.getElementById("namevar");
const email=document.getElementById("emailvar");
const mobile=document.getElementById("mobilevar");
const message=document.getElementById("messagevar");
const sendmessage=document.getElementById("summit");


const database=firebase.database();

sendmessage.addEventListener("click",(e) =>{
    e.preventDefault();
    database.ref("/users/"+ namevar.value).set({
        name:namevar.value,
        email:emailvar.value,
        mobile:mobilevar.value,
        summit:summit.value
    });
});