const showLogin = () => {
    let str=`
    <div id ='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick ='showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
       <div id = 'App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick='showLogin()'>Already have an Account</button></p>
    `
    root.innerHTML = str
}
const showHome = () =>{
    let str = `
      <div id = 'App-Container'>
    <h1>Welcome</h1>
    `
    
    
    root.innerHTML = str
}