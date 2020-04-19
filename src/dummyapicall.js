import React from 'react';
import axios from 'axios';
class DummyClass extends React.Component
{
state={
    employee:[]
}
componentDidMount()
{
axios.get('http://dummy.restapiexample.com/api/v1/employees')
.then(res=>{this.setState({employee:res.data.data})})
.catch(err=>console.log(err));
} 
  
render()
{
//console.log(this.state.employee);  
return(
<div>
<ul>
{this.state.employee.map((res)=><li>{res.employee_name}</li>)}
</ul>
</div>
)

}

}
export default DummyClass;