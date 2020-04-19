import React from 'react';
import axios from 'axios';
class Contactform extends React.Component
{
constructor(props)
{super(props);
    this.state={
        uname:'',
        email:''

    }
}
handleChange=(e)=>{
e.preventDefault();    
this.setState({[e.target.name]:e.target.value})
}
handleSubmit=(e)=>
{
const postFormdata=new FormData();
postFormdata.append('uname',this.state.uname); 
postFormdata.append('email',this.state.email);  
axios.post('php/insert.php',postFormdata).then(res=>{
    //{method:'post',url:'insert.php',data:postFormdata}).then(res=>{
        alert('');
})
}


render()
{
  
return(
<div>
<section>
<div className="row">
<div className="col-md-6">

    <div className="form-group"><label htmlFor="uname">Name</label><input type="text" name="uname" id="uname" onChange={this.handleChange}/></div>
    <div className="form-group"><label htmlFor="email">Email</label><input type="text" name="email" id="email" onChange={this.handleChange}/></div>
    <div className="form-group"><input type="submit" name="submit" value="SAVE" onClick={this.handleSubmit}/></div>


</div></div>
</section>

</div>


)

}


    
}
export default Contactform;