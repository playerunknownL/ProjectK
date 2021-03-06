import React ,{useState,useEffect,useCallback}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { dispatchProductList } from '../Redux/action'

import { bindActionCreators } from 'redux'


let Watches = (props) => {
  const productsData = useSelector((state) => state.productsReducer)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchProductList
    },
    dispatch
  )


   const getData = useCallback(async ()=>{
       const res = await axios.get('https://api.jsonbin.io/b/6124f48ec5159b35ae0336b8') 
       actions.dispatchProductList(res.data)
   },[])

   useEffect(()=>{
       getData()
   },[getData])


  // const[data,setData]=useState([])
  //   const[cart,setCart]=useState(true)

  //   const pullData=async()=>{
  //       const res=await axios.get("https://api.jsonbin.io/b/611fd94d2aa80036126d2a62")
  //       setData(res.data)
  //       setCart(false)
  //   }

  //   useEffect(()=>{
  //    pullData()
  //   },[])
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Watches</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            
              
              {productsData.productsList.map((watch,index)=>{
                  return(
                    <div key={index}  className="col-lg-3 py-3 px-3">
                      <div className="card">
                      <div className="card-header bg-white">
                        <img
                         src={watch.img}
                         alt="Rolex Watch"
                         height="50%"
                          width="50%"
                         />
                      </div>

                      <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">{watch.name}</li>
                            <li className="list-group-item">{watch.price}</li>
                           <li className="list-group-item">
                              <Link to="/cart">
                               <button className="btn btn-success" data-id={watch.id} onClick={()=>props.onAdd(watch)}>Add Cart</button>
                              </Link>
                          </li>
                        </ul>
                     </div>

                    </div>
                    </div>
                 )
              })}
                
           </div>
        
            
      </div>
  
      </section>
    </React.Fragment>
  );
};
export default Watches;