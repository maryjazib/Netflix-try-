// For Sign In :
function SignIn(){
    let name=document.getElementById('name').value;
    let fname=document.getElementById('fname').value;
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;

    alert('Sign In Successfully...!');
    window.location.href=('login.html');
localStorage.setItem("Name",name);
localStorage.setItem("Father-Name",fname);
localStorage.setItem("Username",username);
localStorage.setItem("E-mail",email);
localStorage.setItem("Password",password);
}
// For Log In :
function LogIn(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let regemail=localStorage.getItem('E-mail');
    let regpassword=localStorage.getItem('Password');

    if(email===regemail && password===regpassword){
        alert('Welcome to Netflix')
        window.location.href=("home.html")
    }
    else{
        alert('Incorrect details')
    }


}





