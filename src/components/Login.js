import './Login.css';


function Login() {
  return (
    <div className="main">
     <div className="main_two">
       <div>
         <div className="picture">
           <div className="border">
             <img src={'images/seal.png'} alt="login image" className="holder_image"/>

           </div>


         </div>
         <div>
           <h1>Login Information</h1>
           <div>
             <img src={'images/username.png'} alt="email" className="bubbles"/>
             <input type="text" placeholder="Login Email/Username" className="image_space"/>
           </div>
           <div className="input_bubble_space">
             <img src={'images/lock.png'} alt="crudentials" className="bubbles"/>
             <input type="password" placeholder="Password" className="image_space"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="alt_signin_options">
              <a href="#">Forgot Password </a> / <a href="#">Sign-Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;