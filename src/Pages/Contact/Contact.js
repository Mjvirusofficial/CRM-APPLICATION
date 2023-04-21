import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import './Contact.css'
import Dashboard from '../../Component/Dashboard/Dashboard';
function Contact() {

    const navigate = useNavigate()
    useEffect(() => {
        let email = localStorage.getItem('email');
        // console.log(email)
        if (email === '' || email === null) {
            navigate('/login')
        }
    })

    const [filterData, setFilterData] = useState([]);

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);



    const API = 'https://mycrmserver.netlify.app/api/customer/';
    const [dashbord, setDashboard] = useState('');


    useEffect(() => {
        fetch(API).then(res => {
            return res.json()
        }).then(r => {

            //Per Page
            const pagination = r.slice(page * 10 - 10, page * 10);

            setData(r)

            // console.log(r)
            setFilterData(r)



            console.log(r)
            let newData = pagination.filter(i => i.status === 'New').length;
            let accepted = pagination.filter(i => i.status === 'Accepted').length;
            let rejected = pagination.filter(i => i.status === 'Rejected').length;

            const obj = {
                'total': pagination.length,
                'newdata': newData,
                'accepted': accepted,
                'rejected': rejected
            }
            setDashboard(obj)



        })
    },[page])

    // console.log(search)

    function handleSearch(key) {
        if (!key || key.length === 0) {
            setData(filterData)
        }
        const a = filterData.filter(i => i.name.toLowerCase().includes(key.toLowerCase()))
        setData(a)
    }





    function handleEditClick(id) {
        // console.log(id);
        navigate(`/create/${id}`);
    }



    function handleDeleteClick(name) {
        fetch(`${API}/${name}`, {
            method: "DELETE"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
            });
    }




    // filter(i => {
    //     return i.name.toLowerCase().includes(search.toLowerCase())
    // }).


    return (
        <>
            <Navbar />
            <div className=" mt-3 table-header container-fluid ">
                <NavLink to='/create'>
                    <button className="btn btn-success">
                        New Customer
                    </button>
                </NavLink>
                <div className="search-box-wrapper">
                    <input
                        placeholder="Search..."
                        onInput={(e) => { handleSearch(e.target.value) }}
                        // onClick={() => searching}
                        className="search-box" type="search" />&nbsp;&nbsp;
                    <svg xmlns="http:www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>

            </div>




            <div className="container mt-4">
                <h1 className='text-center emp-header'>The list of your employee</h1>
            </div>
            <Dashboard count={dashbord} />
            <div className="container-fluid overflow-scroll mt-4">
                <div className="row">
                    <div className="col col-sm-12">
                        {data.length === 0 && (
                            <div className="container ">
                                <div className="row ">
                                    <div class="alert alert-primary   col-lg-12 " role="alert">
                                        No Customers are available in system.
                                    </div>
                                </div>
                            </div>
                        )}

                        {data.length > 0 && (
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

                                        data.slice(page * 10 - 10, page * 10).map((i, index) => {

                                            return <tr>
                                                <th scope="row">{index + 1 }</th>
                                                <td>{i.name}</td>
                                                <td>{i.employees}</td>
                                                <td className={i.status.toUpperCase() === 'ACCEPTED' ? 'green' :'' || i.status.toUpperCase() === 'REJECTED' ? 'red' :'' || i.status.toUpperCase() === 'NEW' ? 'blue' :''} >{i.status.toUpperCase()}</td>
                                                <td>{i.turnover}</td>
                                                {/* <td>{i.website}</td> */}
                                                <td>{i.ceo}</td>
                                                <td>{i.year}</td>

                                                <td className='center-text d-flex'>
                                                    <button onClick={() => handleEditClick(i.name)} className='btn btn-warning m-1'>Edit</button>
                                                    <button onClick={() => handleDeleteClick(i.name)} className='btn btn-danger m-1'>Remove</button>
                                                </td>
                                            </tr>
                                        })
                                    }


                                </tbody>




                            </table>
                        )
                        }


                    </div>
                </div>


            </div>


        <div className="mt-4">
        <nav className='' aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item ">
                        <button className="page-link" onClick={() => setPage(page - 1)} >◀️</button>
                    </li>

                    {/* {
    [...Array(data && data.length/10)].map((_,id) =>{
        return <span>{id+1}</span>
    })
   } */}

                    <li className="page-item"><button onClick={() => setPage(1)} className="page-link" >1</button></li>
                    <li className="page-item"><button onClick={() => setPage(2)} className="page-link" >2</button></li>
                    <li className="page-item"><button onClick={() => setPage(3)} className="page-link" >3</button></li>
                    <li className="page-item"><button onClick={() => setPage(4)} className="page-link" >4</button></li>
                    <li className="page-item"><button onClick={() => setPage(5)} className="page-link" >5</button></li>
                    <li className="page-item"><button onClick={() => setPage(6)} className="page-link" >6</button></li>
                   
                    {/* <li className="page-item"><button onClick={() => setPage(7)} className="page-link" >7</button></li> */}
                    {/* <li className="page-item"><button onClick={() => setPage(8)} className="page-link" >8</button></li> */}

                    <li className="page-item">
                        <button onClick={() => setPage(page + 1)} className="page-link" >▶️</button>
                    </li>
                </ul>
            </nav>
        </div>

        </>
    )
}

export default Contact