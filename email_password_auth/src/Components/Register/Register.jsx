import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.config';

const Register = () => {

    const[registerError,setregisterError] = useState("");
    const[registerSuccess,setregisterSuccess]= useState("");
    const [showpassword,setShowpassword]= useState("")

    const handleRegister= (e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;

        
        setregisterError("")
        setregisterSuccess("");

        if(password<6){
            setregisterError("password should be atleast 6 characters")
            return
        }
        else if(!/[A-Z]/.test(password)){
            setregisterError("your password should at least one Uppercase letter")
            return
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result.user)
            setregisterSuccess("user created successfully")
        })
        .catch((error)=>{
            console.log(error.message)
            setregisterError(error.message);
        })
    }

    return (
        <div className=' mt-5'>
            <div className='mx-auto md:w-1/2'>
            <h1 className='text-3xl mb-8'> Register Here</h1>
            <form onSubmit={handleRegister} >
              <input className='mb-5 w-3/4 px-2 py-3' type="email "name='email' placeholder="Email Address" />
              <br />
              <input className='mb-5 w-3/4 px-2 py-3' type={showpassword?"text":"password"} name='password' placeholder='Password' />
              <span onClick={()=>setShowpassword(!showpassword)}> show password</span>
            
              <br />
              <button className=' btn btn-primary mb-5 w-3/4 '>submit</button>

            </form>
            {
                registerError ? <div className="toast">
                <div className="alert alert-info">
                  <span>{registerError}</span>
                </div>
              </div> : <div></div>

            }
            {
                registerSuccess ? <div className="toast toast-top toast-start">
               
                <div className="alert alert-success">
                  <span>{registerSuccess}</span>
                </div>
              </div> : <div></div>
            }



            </div>
        </div>
    );
};

export default Register;