import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './App.css'
function App() {
  const [state, setstate] = useState('London');
  const [GetState,SetGetState]= useState('London');
  const [ApiData,SetApiData]=useState()
  const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=ad884e9b975a38411a5c1f6d44752e07`;
 
  useEffect(() => {
     axios.get(apiUrl)
    .then((res)=> {
    console.log(res)
    SetApiData(res.data)
    }
    )
    .catch((error)=>console.log(error))

  }, [apiUrl])
    const method =()=>{
      if(ApiData ===undefined){
        return null;

      }
      else{
        return <div><img
        src={`http://openweathermap.org/img/w/${ApiData.weather[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      /></div>
      }
    }
  const InputHandle =(e)=>{
     SetGetState(e.target.value);
  }
  const SubmitHandle =()=>{
    setstate(GetState);
  }
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <>
    <div className="section">
    <div className="mobileSection">
     <h4>Weather App</h4>
      <input
            type="text"
            id="location-name"
            class="form-control"
            onChange={InputHandle}
            value={GetState}
          />
          <button onClick={SubmitHandle}>Submit</button>
          
          { 
          (ApiData===undefined)?(<h1>Loading</h1>):<div className="main"><img
        src={`http://openweathermap.org/img/w/${ApiData.weather[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      />
      <h3>{kelvinToFarenheit(ApiData.main.temp)}&deg; c</h3>
      <h2>{ApiData.weather[0].main}</h2>
      </div>
           }
           </div>
      </div>
    </>
  )
}

export default App
