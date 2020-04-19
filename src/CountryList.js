import React from 'react';
import axios from 'axios';
import Imgix from 'react-imgix';
class CountryList extends React.Component{
constructor(props)
{
    super(props);
    this.state={
        country:[]
    }
}
componentDidMount()
{
axios.get("https://restcountries.eu/rest/v2/all").then(res=>{
    this.setState({country:res.data})
console.log(this.state.country);
})
}

render()
{
 const mystyle={
    height:"150px",
    
 }   
return(
<div className="container">
<div className="row">


    {
    this.state.country.map((res)=>
    <div className="col-md-3">
        <div className="card-deck">
        <div className="card">
        <div>  
        <Imgix src={res.flag}  className='card-img-top' width={150}  height={150} />
        </div>
        <div className='card-body flex-column mystyle'>
       <h5 className='card-title'>{res.name}</h5>
       <p className='card-text'>{res.population}<br />
       {res.region}<br />
       {res.capital}</p>
        
        </div>  </div>    
     
        </div>

        </div>
    )}



</div></div>

)



}


}
export default CountryList;