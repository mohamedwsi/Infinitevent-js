//login

document.querySelector("#loginform").addEventListener('submit',(e)=>{
   
    e.preventDefault();
    const userdetails = JSON.parse(localStorage.getItem('userdetails'));

    const enteredusername = document.getElementById('username').value;
    const enteredpassword = document.getElementById('password').value;


    for(let i=0; i<userdetails.length; i++){
        if(userdetails[i].username == enteredusername && userdetails[i].password == enteredpassword && userdetails[i].password!="" ){
            console.log("matched")
            window.location.href = "index.html"
    }
}});

//document.querySelector(".sign-up-link").addEventListener('submit',()=>{ window.location.href = "regis.html"});

