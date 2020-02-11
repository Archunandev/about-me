const namevar=document.getElementById("namevar");
const emailvar=document.getElementById("emailvar");
const mobilevar=document.getElementById("mobilevar");
const subjectvar=document.getElementById("subjectvar");
const summit=document.getElementById("summit");

const database=firebase.database();

summit.addEventListener("click",(e) =>{
    e.preventDefault();
    database.ref("/users/"+ namevar.value).set({
        namevar:namevar.value,
        emailvar:emailvar.value,
        mobilevar:subjectvar.value,
        summitvar:summit.value
    });
});
