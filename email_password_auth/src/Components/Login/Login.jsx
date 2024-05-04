import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const[showError,setShowError]= useState("");
    const[success,setSuccess]= useState("")
    const emailref= useRef(null)

const handeLogin=(e)=>{

    e.preventDefault();

    const email= e.target.email.value;
    const password= e.target.password.value;

    console.log(email,password)
    //reseting
    setShowError("")
    setSuccess("")
         
    //sign in

    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
        setSuccess("you loged in successfully")
    })
    .catch((error)=>{
        setShowError(error.message)
    })
}

const handleforgetpass=()=>{
    
  const email= emailref.current.value;
  

   if(!email){

    console.log("there is no email");
    return;
   }
   else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        
    console.log("please add valid email")
    return

   }


  sendPasswordResetEmail(auth,email)
  .then(()=>{
    console.log("check email")

  })
  .catch((error)=>{

    console.log(error);

  })


}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handeLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailref} name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" onClick={handleforgetpass} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>

            {
                showError?  <h2 className="text-red-700 mt-2">{showError}</h2> : <div></div>
            }
            {
                success?  <h2 className="text-green-700 mt-2">{success}</h2> : <div></div>
            }
       
      </div>
      <div></div>
    <p>New To this website? <Link className="text-blue-500 " to="/register">plase Register</Link></p>

      </form>

      
      
    </div>
    
  </div>
</div>
    );
};

export default Login;