import React, { useState, useEffect} from 'react'


import { fetchDataCountries } from '../Api'


const CountryPicker=({handleCountryChange})=> {
  
const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi= async()=>{
            setFetchedCountries(await fetchDataCountries())
        }
        fetchApi();

        },[setFetchedCountries])

      
        // console.log(fetchDataCountries)
    return (
        <>
     


    


{/* <button type="button" className="btn btn-primary textc" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Select country Here.....
</button>
<p>
</p>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> Country List </h5>
      </div>
      <div className="modal-body"> */}


      <select className="form-select"  onChange={(e)=>handleCountryChange(e.target.value)}  aria-label="Default select example" >
        <option  value="">Global</option>
        {fetchedCountries.map((country, index)=>
        <option key={index} value={country}>{country}</option>)}
    </select>
<hr />


      {/* </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Done</button>
       </div>
     </div>
  </div>
 </div> */}
</>
    )
}


export default CountryPicker
