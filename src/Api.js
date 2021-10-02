import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const url2 = "https://covid19.mathdro.id/api/daily";
const url3 = "https://covid19.mathdro.id/api/countries";


export const fetchDataCards = async (country)=>{
    let changeableUrl =url;


    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {

                                 // //------First Method----------//
        //  //response.data
        // const { data } = await axios.get(url);  // 1
        
        // const modifiedData={    // 1
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths:    data.deaths,
        //     lastUpdate:data.lastUpdate
        // }

        // return modifiedData;  // 1


                                   // //------Second Method----------//
        
        const { data :{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        console.log(confirmed, recovered, deaths, lastUpdate);

        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log("api url1 for global error...")
    }
}












export const fetchDataCountries = async ()=>{
    try {
        const { data:{countries} }  = await axios.get(url3); 
        // console.log(data);
   return countries.map((country)=>country.name)
       

        
    } catch (error) {
        console.log("api url3 country wala error...")
    }
}





















export const fetchDailyData = async ()=>{
    try {
        const { data } = await axios.get(url2); 
        
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            // recovered:dailyData.recovered.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }))
        
        // console.log(data);
        return modifiedData;


    } catch (error) {
        console.log("api url2 Graph error...")
    }
}