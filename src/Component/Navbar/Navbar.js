import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css';
function Navbar() {


  

  function logout(){
    return localStorage.clear()
  }
  

  // const navigate = useNavigate();
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink style={{fontSize:'2rem'}} className="navbar-brand custom-header size" id='name' to="/">MJ<span className='off'>Enterprises</span></NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   

    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/create">User</NavLink>
        </li>

    </ul>
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          <NavLink onClick={() => logout()}  className="nav-link active " aria-current="page" to="/login"><span  className="btn btn-warning">Logout</span></NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login"><span className="btn btn-success">Register</span></NavLink>
        </li> */}
          {/* 
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact us</NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar