import React from 'react';
class Userform extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            usernameval:'',
            passwordval:'',
            username:'',
            password:''
              
        }
   }
handleSubmit = (e) => {
e.preventDefault();    
this.setState({usernameval:'Your Username: '+this.state.username});
this.setState({passwordval:'Your Password: '+ this.state.password});
}
handleChange = (e) =>{
    let name= e.target.name;
    let value = e.target.value;
    this.setState({[name]: value})
}
render()
{
return (
<div>
    <label>Username:</label><input type="text" name="username"  onChange={this.handleChange}   /><br /><br />
    <label>Password:</label><input type="password"  name="password" onChange={this.handleChange}  /><br /><br />
    <button onClick={this.handleSubmit}>Click</button>

    <br /> <br /> <br />
     {this.state.usernameval}
    <br></br>
    {this.state.passwordval}
    
</div>)
}
}
export default Userform;