import React, {useState,useEffect} from 'react';
import { fetchDailyData } from '../Api';
import { Line,Bar ,Doughnut  } from 'react-chartjs-2';

function Chart({ data:{confirmed,recovered,deaths} , country }) {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
       const fetchAPI = async ()=>{
           setDailyData(await fetchDailyData());
       } 

    //    console.log(dailyData);

    fetchAPI();
    }, []);





    // global wala Line Chart
    const lineChart = (
        dailyData.length ? 
        ( <Line 
            data={{
                labels : dailyData.map(({date})=>date),
                datasets : [ {
                    data:dailyData.map(({confirmed})=>confirmed),
                    label :'Infection',
                    borderColor: "rgb(0,0,255)",
                    // backgroundColor: "rgba(0,0,255,0.6)",
                    fill:true,
                },{
                    data:dailyData.map(({recovered})=>12345667),
                    label :'Recovered',
                    borderColor: "rgba(0,255,0,0.6)",
                    // backgroundColor: "rgba(0,255,0,0.6)",
                    fill:true,
                } ,{
                    data:dailyData.map(({deaths})=>deaths),
                    label :'Deaths',
                    borderColor: "rgba(255,0,0,0.5)",
                    // backgroundColor: "rgba(255,0,0,0.5)",
                    fill:true,
                } ],
            }}
            /> ) : null
    )












    // global wala Bar Chart
//     const lineChart =
//     dailyData.length ? 
//    ( <Bar 
//        data={{
//         labels : ["Infection","Recovered data cannot Fetch in Api" ,"Deaths"],
//            datasets : [ {
//             data:dailyData.map(({confirmed})=>confirmed),
//             data:dailyData.map(({recovered})=>recovered),
//             data:dailyData.map(({deaths})=>deaths),
//              label :'Infection',
//                backgroundColor: [
//                    "rgba(0,0,255,0.6)",
//                    "rgba(0,255,0,0.6)",
//                    "rgba(255,0,0,0.6)",
//                ],
//                fill:true,
//                data:[confirmed.value,123456789,deaths.value]
//            }]
//        }}
//        options = {{
//            legend :{ display:false },
//            title : { display:true, text: `Current state in ${country}`}
//        }}
//        /> ) : null


 












// global wala Doughnut Chart

    // const lineChart = (
    //     dailyData.length ? 
    //     ( <Doughnut 
    //         data={{
    //     labels: dailyData.map(({date})=>date),
    //     datasets: [{
    //         data:[dailyData.map(({confirmed})=>confirmed)],
    //         label :'Infection',
    //       backgroundColor: 'rgb(0, 0, 255)',

    //       hoverOffset: 4
    //     }]
    // }}
    //     /> ): null
    // );







// country selection wala
    const barChart =
     confirmed ? 
    ( <Bar 
        data={{
            labels : ["Infection","Recovered data can't fetch 1234-Defult" ,"Deaths"],
            datasets : [ {
                label :'Number oF Peoples',
                backgroundColor: [
                    "rgba(0,0,255,0.6)",
                    "rgba(0,255,0,0.6)",
                    "rgba(255,0,0,0.6)",
                ],
                // fill:true,
                data:[confirmed.value,1234,deaths.value]
            }]
        }}
        options = {{
            // legend :{ display:false },
            title : { display:true, text: `Current state in ${country}`}
        }}
        /> ) : null


    return (
        <div className="container">
           { !country ? lineChart :barChart }
        </div>
    )
}

export default Chart
