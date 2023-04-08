import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'

function CreateList() {

  const [newData, setNewData] = useState();

  function Create() {

    const API = 'https://mycrmserver.netlify.app/api/customer/';
    fetch(API, {
      method:  "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        // navigate("/");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className='text-center '>Create Company</h1>
        <div class="form-group col-md-5 col-10 mx-auto mt-4">
          <label for="exampleInputEmail1"><h5>Name</h5></label>
          <input onChange={(e) => { setNewData({ ...newData, name: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter company name" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Employee</h5></label>
          <input onChange={(e) => { setNewData({ ...newData, email: e.target.value }) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter employee" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Turnover</h5></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter turnover" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Website</h5></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>CEO</h5></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ceo name" />
        </div>

        <div class="form-group col-md-5 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Year</h5></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter establish year" />
        </div>





        <div onClick={Create} class=" mt-2 form-group col-md-5 col-10 mx-auto">
          <button className='btn btn-success ' >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreateList