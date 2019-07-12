import React from "react";

 const Weather = props => (
   <div className="title-container__title">

   {
     props.city&&props.country&& <p className="weatherkey">Location:
     <span className="weathervalue">{props.city}, {props.country}</span></p>
   }
   {props.temperature&&<p className="weatherkey">Temperature:
     <span className="weathervalue">{props.temperature}°C</span></p>
   }
   {
     props.humidity&& <p className="weatherkey">Humidity:

     <span className="weathervalue">{props.humidity}</span></p>
   }
   {
     props.description&& <p className="weatherkey">Conditions:
     <span className="weathervalue">{props.description}</span></p>
   }
   {
     props.error&& <p className="weatherkey">Error:
     <span className="weathervalue">{props.error}</span></p>
   }
   </div>
 );

export default Weather;
