import React from 'react'
import './Dashboard.css'

function Dashboard(mj) {
  return (
    <div>
        <div className="container dashboard ">
           <div className="row d2">
            <div className="col-6 col-lg-3 col-md-4">
                <div onClick={mj.dashbordClick} className="c1">
                    <p>All Enteries</p>
                    <p>{mj.count.total}</p>
                    {/* <p>300</p> */}
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-4">
                <div onClick={mj.dashbordClick} className="c2">
                    <p>New</p>
                    <p>{mj.count.newdata}</p>
                    {/* <p>150</p> */}
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-4">
                <div onClick={mj.dashbordClick} className="c3">
                    <p>Accepted</p>
                    <p>{mj.count.accepted}</p>
                    {/* <p>280</p> */}
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-3">
                <div onClick={mj.dashbordClick} className="c4">
                    <p>Rejected</p>
                    <p>{mj.count.rejected}</p>
                    {/* <p>20</p> */}
                </div>
            </div>


           </div>
        </div>
    </div>
  )
}

export default Dashboard