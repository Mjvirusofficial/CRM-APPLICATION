import React from 'react'
import './Dashboard.css'

function Dashboard(mj) {
  return (
    <div>
        <div className="container dashboard ">
           <div className="row d2">
            <div className="col-6 col-lg-3 col-md-4">
                <div className="c1">
                    <p>All Enteries</p>
                    {/* <p>{mj.total}</p> */}
                    <p>300</p>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-4">
                <div className="c2">
                    <p>New</p>
                    {/* <p>{mj.new}</p> */}
                    <p>150</p>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-4">
                <div className="c3">
                    <p>Accepted</p>
                    {/* <p>{mj.accepted}</p> */}
                    <p>280</p>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-3">
                <div className="c4">
                    <p>Rejected</p>
                    {/* <p>{mj.rejected}</p> */}
                    <p>20</p>
                </div>
            </div>


           </div>
        </div>
    </div>
  )
}

export default Dashboard