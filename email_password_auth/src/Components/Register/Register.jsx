import React from 'react';

const Register = () => {

    const handleRegister= (e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;

        console.log(email,password)
    }

    return (
        <div className=' mt-5'>
            <div className='mx-auto md:w-1/2'>
            <h1 className='text-3xl mb-8'> Register Here</h1>
            <form onSubmit={handleRegister} >
              <input className='mb-5 w-3/4 px-2 py-3' type="email "name='email' placeholder="Email Address" />
              <br />
              <input className='mb-5 w-3/4 px-2 py-3' type="password" name='password' placeholder='Password' />
              <br />
              <button className=' btn btn-primary mb-5 w-3/4 '>submit</button>

            </form>
            </div>
        </div>
    );
};

export default Register;