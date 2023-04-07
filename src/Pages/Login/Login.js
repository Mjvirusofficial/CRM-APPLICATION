import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './Login.css'
function Login() {

    const [loginData, setLoginData] = useState();
    const navigate = useNavigate()
   


    function login(){
        if(!validate){
           toast.warning('Enter your email & password')
        }

        if(validate()){
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
    
            // console.log(email,password)
    
            if(email === loginData.email && password === loginData.password){
                toast.success('Login Successfully')
                console.log('Login Successfully')
    
                navigate('/')
               } 
               
               else if(email !== loginData.email || password !== loginData.password){
                toast.warning('Credential not vaild')
               }
               else if(loginData.email === '' || loginData.email == null){
                toast.warning('Username & password required')
               }
        }
    }




    // function login() {
    //     // if (validate() === false) {
    //     //     toast.error('Please enter valid email & password')
    //     // }

    //     if(!loginData){
    //         toast.warning('Enter your email & password')

    //     }

    //     if(validate()){
    //         const data = localStorage.getItem('data');
    //         console.log(data.email,data.password)
    //     }


    //     if (validate()) {
    //         fetch('http://localhost:3000/register').then(res => res.json()).then((r) => {
    //             // console.log(r)
    //             if (Object.keys(r).length === 0) {
    //                 toast.error('Please enter valid email')
    //             }

    //             else {
    //                 if (r.email === loginData.email) {
    //                     if (r.password === loginData.password) {
    //                         toast.success('Login successfully')
    //                         navigate('/')
    //                         sessionStorage.setItem('email', loginData.email)
    //                     } else {
    //                         toast.error('Please enter valid paasword')
    //                     }
    //                 }

    //                 else {
    //                     toast.error('Invalid email & password')
    //                 }
    //             }
    //         })
    //     }
    // }



    function validate() {
        let result = true;
        if (loginData.email.length === 0 || loginData.email === null) {
            result = false;
            toast.error('Plese enter email')
        }

        if (loginData.password === '' || loginData.password == null) {
            result = false;
            toast.error('Plese enter password')
        }
        return result;
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    {/* left part */}
                    <div className="col col-12 col-md-6 mt-5">
                        <img src='https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif' className="image img-fluid" alt='img' />
                    </div>

                    {/* Right part */}
                    <div className="col col-md-4 ">
                        <h1 className="text-center mb-4 mt-5">Login to your account</h1>

                        <label htmlFor="email" className="form-label">
                            <h5>Your Email</h5>
                        </label>

                        <input onInput={(e) => {
                            setLoginData({ ...loginData, email: e.target.value })
                        }} type="email" name="email" className="form-control" />

                        <label htmlFor="name" className="form-label">
                            <h5>Password</h5>
                        </label>

                        <input onInput={(e) => {
                            setLoginData({ ...loginData, password: e.target.value })
                        }} type="password" name="password" className="form-control" />
                        <input
                            onClick={login}
                            className="btn btn-primary float-start mt-2"
                            type="button"
                            value="Sign In"></input>
                        <p className='  m-3' ><span className='dontHave'>Dont't have an account?</span> <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}> <b>Join today</b></Link></p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login