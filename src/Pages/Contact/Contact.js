import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import './Contact.css'
function Contact() {

    const navigate = useNavigate()
    useEffect(() =>{
        let email = localStorage.getItem('email');
        console.log(email)
        if(email === '' || email === null){
          navigate('/login')
        }
    })

    const [data,setData] = useState();

    const API = 'https://mycrmserver.netlify.app/api/customer/';


    useEffect(() =>{
        fetch(API).then(res =>{
            return res.json()
        }).then(r =>{
            setData(r)
        })
    },[])


function handleSearch(){

}


    function handleDeleteClick(name) {
        fetch(`${API}/${name}`, {
          method:"DELETE"
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            setData(res);
            setData(res);
          });
      }
   
    return (
        <>
<Navbar/>
            <div className=" mt-3 table-header container-fluid ">
                <NavLink to='/create'>
                    <button className="btn btn-success">
                        New Customer
                    </button>
                </NavLink>
                <div className="search-box-wrapper">
                    <input
                        placeholder="Search..."
                        onChange={(e)=>{handleSearch(e.target.value)}}
                        className="search-box" type="search" />&nbsp;&nbsp;
                    <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>

             </div>

             <div className="container mt-4">
                 <h1 className='text-center emp-header'>The list of your employee</h1>
             </div>


             <div className="container-fluid overflow-scroll">
                 <div className="row">
                     <div className="col col-sm-12">
                         <table class="table table-light">
                             <thead className=''>
                                 <tr>
                                     <th scope="col">ID</th>
                                     <th scope="col">NAME</th>
                                     <th scope="col">EMPLOYEE</th>
                                     <th scope="col">STATUS</th>
                                     <th scope="col">TURNOVER</th>
                                     {/* <th scope="col">WEBSITE</th> */}
                                     <th scope="col">CEO</th>
                                     <th scope="col">YEAR</th>
                                     <th scope="col" className='text-center'>ACTION</th>

                                 </tr>
                             </thead>
                             <tbody>

                             {
                                 data && 
                                 data.map((i,index) =>{
     
                        return  <tr>
                                     <th scope="row">{index+1}</th>
                                     <td>{i.name}</td>
                                     <td>{i.employees}</td>
                                     <td>{i.status}</td>
                                     <td>{i.turnover}</td>
                                     {/* <td>{i.website}</td> */}
                                     <td>{i.ceo}</td>
                                     <td>{i.year}</td>

                                     <td className='center-text d-flex'>
                                         <button className='btn btn-warning m-1'>Edit</button>
                                         <button onClick={() => handleDeleteClick(i.name)} className='btn btn-danger m-1'>Remove</button>
                                     </td>

                                 </tr>
                            
                                 })
                             }
                               
                             </tbody>




                         </table>
                     </div>
                 </div>
             </div>

         </>
     )
}

export default Contact