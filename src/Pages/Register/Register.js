import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import signup from '../Images/Screenshot (186).png'
// import './Register.css'
function Register() {

  const [data, setData] = useState({})
  const navigate = useNavigate();


  // function Register() {
  //   //  console.log(data)

  //   fetch(' http://localhost:3000/register', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'content-Type': 'application/json'
  //     }
  //   }).then(() => {
  //     toast.success('Registration successfully')
  //     navigate('/login')
  //   })
  // }


  function Register() {
    localStorage.setItem('email',data.email);
    localStorage.setItem('password',data.password);

    toast.success('Registration successfully')
    navigate('/login')
  }


  return (
    <>

      <div className="container-fluid">
        <div className="row">
          {/* left part */}
          <div className="col col-12 col-md-6 mt-3">
            <img src={signup} className="image img-fluid" alt='img' />
          </div>



          {/* Right part */}
          <div className="col col-md-4 ">
            <h3 className="text-center mb-4 mt-5">Register with MJ<span className='off'> Interprises</span></h3>

            <label htmlFor="name" className="form-label">
              <h5>Full Name</h5>
            </label>

            <input onInput={(e) => {
              setData({ ...data, name: e.target.value })
            }} type="name" name="name" className="form-control" />

            <label htmlFor="email" className="form-label">
              <h5>Email</h5>
            </label>

            <input onInput={(e) => {
              setData({ ...data, email: e.target.value })
            }} type="email" name="email" className="form-control" />

            <label htmlFor="number" className="form-label">
              <h5>Phone</h5>
            </label>

            <input onInput={(e) => {
              setData({ ...data, phone: e.target.value })
            }} type="number" name="number" className="form-control" />

            <label htmlFor="password" className="form-label">
              <h5>Password</h5>
            </label>

            <input onInput={(e) => {
              setData({ ...data, password: e.target.value })
            }} type="password" name="password" className="form-control" />

            <input
              onClick={Register}
              className="btn btn-success float-start mt-2"
              type="button"
              value="Register"></input>
            <p className='  m-3' ><span className='dontHave'>Already have an account?</span> <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> <b>Signin</b></Link></p>
          </div>
        </div>

      </div>

    </>
  )
}

export default Register