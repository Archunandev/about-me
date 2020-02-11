const namevar=document.getElementById("namevar");
const emailvar=document.getElementById("emailvar");
const mobilevar=document.getElementById("mobilevar");
const messagevar=document.getElementById("messagevar");
const summit=document.getElementById("summit");

const database=firebase.database();

summit.addEventListener("click",(e) =>{
    e.preventDefault();
    database.ref("/users/"+ namevar.value).set({
        namevar:namevar.value,
        emailvar:emailvar.value,
        mobilevar:mobilevar.value,
        messagevar:messagevar.value
    });
});
