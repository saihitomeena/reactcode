import React from 'react';
class Todoapplication extends React.Component
{
constructor(props)
{
super(props);
this.state={
    newitem:'',
    list:[]
}
}    
additembychangevent(val)
{
   this.setState({newitem:val});

}
additem()
{
const new_item={
     id:Date.now(),
     value:this.state.newitem,
     statue:false
 } 
 this.setState({list:this.state.newitem})  

 const listitem=[...this.state.list];

 this.setState({list:listitem});
 listitem.push(new_item);
//console.log(listitem);
console.log(this.state.list);
}
render()
{
    
return(
    <div>
       
        <input type="text" name='addvalue' value={this.state.newitem} onChange={(e)=>{this.additembychangevent(e.target.value)}} />
        <input type="button" onClick={(e)=>{this.additem()}} value="Add Item" />

       

    </div>
);

}



}

export default Todoapplication;