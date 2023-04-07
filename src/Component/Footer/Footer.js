import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div><br /><br />
    <footer class="bg-dark text-center text-white">
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: Social media --> */}
      <section class="mb-4">
        {/* <!-- Facebook --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100039237225286" role="button"
          ><i class="fa-brands fa-square-facebook"></i></a>
  
        {/* <!-- Twitter --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/MjVirus3" role="button"
          ><i class="fab fa-twitter"></i></a>
  
        {/* <!-- Youtube --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/@mjvirus" role="button"
          ><i class="fa-brands fa-youtube"></i></a>
  
        {/* <!-- Instagram --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/hearthacker_dee147/?hl=en" role="button"
          ><i class="fab fa-instagram"></i></a>
  
        {/* <!-- Linkedin --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mj-virus-23b9a7228/" role="button"
          ><i class="fab fa-linkedin-in"></i></a>
  
        {/* <!-- Github --> */}
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Mjvirusofficial" role="button"
          ><i class="fab fa-github"></i></a>
      </section>
      {/* <!-- Section: Social media --> */}
    </div>
    {/* <!-- Grid container --> */}
  
    {/* <!-- Copyright --> */}
    <div class="text p-3" >
      © 2022 Copyright:
      <a href='/' className='text'> Mjvirusofficial.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
    </div>
  )
}

export default Footer