import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './style.css'



let Mobile = (props) => {
  const[data,setData]=useState([])
    const[cart,setCart]=useState(true)

    const pullData=async()=>{
        const res=await axios.get('./data2.json')
        setData(res.data)
        setCart(false)
    }

    useEffect(()=>{
     pullData()
    })
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Mobiles</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                {data.map((mob,index)=>{
                  return(
                    <div key={index}>
                      
                      <div className="card-header" >
                        <img
                         src={mob.img}
                         alt="Oppo Mobile"
                          height="50%"
                          width="50%"
                           />
                       </div>
                         

                        <div className="card-body" id="mob">
                          <ul className="list-group">
                             <li className="list-group-item">{mob.name}</li>
                             <li className="list-group-item">{mob.price}</li>
                              <li className="list-group-item">
                               <Link to="/cart">
                                        <button className="btn btn-success" data-id={mob.id} onClick={()=>props.onAdd(mob)}>Add Cart</button>
                               </Link>
                           </li>
                          </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Mobile;