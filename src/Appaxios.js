import React from 'react';
//import './App.css';
//import ConditionalRender from './Conditionrender';
import DummyClass from './dummyapicall';
//import Userform from './Userform';
/*function App() {
  return (
 <div><Userform /></div>
  );
}
*/
class App extends React.Component
{
constructor(props)
{
 super(props);
 this.state={
    loggedin:false	
    }
}
  handleClick()
  {
  if(this.state.loggedin)
  {
  this.setState({loggedin : false});	
  }
  else
  {
  this.setState({loggedin : true});		
  }
}
render()
{
////console.log(this.state.loggedin)
return(
<div>

<DummyClass />
</div>
)
}
}
export default App;
