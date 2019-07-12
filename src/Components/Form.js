import React from "react";


const Form = props =>(
  <div>
  <form onSubmit={props.getWeather}>
 <input type="text" name="City" placeholder="City..." />
 <input type="text" name="Country" placeholder="Country..."/>
 <button className="btn btn-danger">Get Weather</button>
  </form>
  </div>
);

export default Form;
