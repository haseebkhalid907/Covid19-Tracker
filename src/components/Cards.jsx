import React from 'react'
import  '../../src/App.css'
import CountUp  from 'react-countup'
import  Covid19  from '../image/covid19.png'



const Cards = (props) => {
    
    const {confirmed, recovered, deaths, lastUpdate} = props.data
    // recovered data cannot avlibale in api 


    // console.log(data);
    // console.log({confirmed, recovered, deaths, lastUpdate})

  // fetchData();
 

    if (!confirmed) {
        return 'Loading...'
    }


    return (
        <>
        <img src={Covid19} alt="covid" />
        <h2>Global</h2>
        
        <div className="row container" >
       
        <div className="card-body border width infected zoom col-xs-6 col-sm-4 col-md-4" >
          <p className="card-text">Infected</p>
          <h5 className="card-title">
              <CountUp
              start={0}
              end={confirmed.value}
              duration={3.5}
              separator =","
              />
          </h5>
          <p className="card-text">
              {new Date(lastUpdate).toDateString()}
              <br />
              {/* {new Date(lastUpdate).toDateString(Date.parse(s))} */}
          </p>
          <p className="card-text">Number of active cases from COVID-19.</p>
        </div> 
        


         <div className="card-body border width recoverd zoom  col-xs-6 col-sm-4 col-md-4">
          <p className="card-text">Recovered</p>
          <h5 className="card-title">
            {/* {lineChart ? */}
          <CountUp
              start={0}
              end={123456789}
              duration={3.5}
              separator =","
              />
               {/* : 0} */}
          </h5>
          <p className="card-text"> 
          {new Date(lastUpdate).toDateString()}
         </p>
          <p className="card-text">Number of recoveries from COVID-19.</p>
        </div>  
        


        <div className="card-body border width deaths zoom   col-xs-6 col-sm-4 col-md-4">
          <p className="card-text">Deaths</p>
          <h5 className="card-title">
          <CountUp
              start={0}
              end={deaths.value}
              duration={3.5}
              separator =","
              />
              </h5>
          <p className="card-text">
              {/* {new Date(lastUpdate).toDateString(Date.parse(s))} */}
          {new Date(lastUpdate).toDateString()}
          </p>
          <p className="card-text">Number of deaths caused by COVID-19.</p>
        </div>
      </div>

      </>
    )
}

export default Cards
