import React from "react";//1.first thing is to import react (which is in package.json file)
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "76588ff293eed1d10a9616323593cc90";

class App extends React.Component{//initialize a Component called Test that extends from ReactComponent

 state={
   temperature : undefined,
   city : undefined,
   country : undefined,
   humidity: undefined,
   description : undefined,
   error : undefined

 }

 getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.City.value;
  const country = e.target.elements.Country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

  const data = await api_call.json();
  if(city&&country){
    //console.log(data);

    this.setState({
      temperature :data.main.temp,
      city : data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:""
    });
  }else{
    this.setState({
      temperature :undefined,
      city : undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter the values..."
    });
  }
}

  render(){       //render is a method used to dispaly the data into this component ,will return jxs

    return(
      <div>
      <div className="wrapper">
      <div className="main">
      <div className="container">
      <div className="row">
      <div className="col-md-5 title-container">
      <Titles/>
      </div>
      <div className="col-md-7 form-container">
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>//everithing to be returned will be only in one single elemnent
    );
  }
};

export default App;
