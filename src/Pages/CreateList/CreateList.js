

import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom';

function CreateList() {

  const [newData, setNewData] = useState({});
  const navigate = useNavigate();
  const API = 'https://mycrmserver.netlify.app/api/customer/';


  const { name } = useParams()
  // console.log(name)




  //For Update

  useEffect(() => {
    if (name) {
      fetch(`${API}/${name}`).then(res => {
        return res.json()
      }).then(r => {
        console.log(r)
        setNewData(r)
      })
    }

  }, [name])


  function Create() {
    // method: uniqueID ? "PUT" : "POST",
    fetch(API, {
      // method:  "POST",
      method: name ? "PUT" : "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate('/')
      })
  }

  return (
    <div>
      <Navbar />
      <div className="container mb-3">
        <h1 className='text-center '> {name ? 'Update Company' : 'Create Company'}</h1>
        <div class="form-group col-md-5 col-10 mx-auto mt-4">
          <label for="exampleInputEmail1"><h5>Name</h5></label>
          <input value={newData.name} onChange={(e) => { setNewData({ ...newData, name: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter company name" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Employee</h5></label>
          <input value={newData.employees} onChange={(e) => { setNewData({ ...newData, employees: e.target.value }) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter employee" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Turnover</h5></label>
          <input value={newData.turnover} onChange={(e) => { setNewData({ ...newData, turnover: e.target.value }) }} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter turnover" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>CEO</h5></label>
          <input value={newData.ceo} onChange={(e) => { setNewData({ ...newData, ceo: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ceo name" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Year</h5></label>
          <input value={newData.year} onChange={(e) => { setNewData({ ...newData, year: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter establish year" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Status</h5></label>

          <select style={{marginLeft:'10px',marginTop:'10px', borderRadius:'6px'}} value={newData.status} onChange={(e) => { setNewData({ ...newData, status: e.target.value }) }}>
          <option >Option</option>
            <option >New</option>
            <option >Accepted</option>
            <option >Rejected</option>
          </select>
          {/* <input value={newData.status} onChange={(e) => { setNewData({ ...newData, status: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter status" /> */}
        </div>



        <div onClick={Create} class=" mt-2 form-group col-md-5 col-10 mx-auto">
          <button className='btn btn-success ' >{name ? 'Update' : 'Submit'}</button>
        </div>
      </div>
    </div>
  )
}

export default CreateList
