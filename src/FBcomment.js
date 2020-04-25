import React from 'react';
class FBcomment extends React.Component
{
 
constructor(props)
{
    super(props);
    this.state={
        comments:[],
        newcomments:"",
        clearcomments:"",
        isMouseInside:true,
        dynamictextbox:""
    }
}
WriteComment(e)
{
if(e.key==='Enter')
{
    e.preventDefault();
    this.setState({comments:this.state.newcomments})
    const commentsobj={
    id: Date.now(),
    value:this.state.newcomments
}
const commentsitem=[...this.state.comments];
commentsitem.push(commentsobj);
this.setState({comments:commentsitem,newcomments:""});
this.setState({isMouseInside:true});
this.setState({clearcomments:""})
console.log(this.state.comments);
    }
}    

handlechange(val)
{
    this.setState({newcomments:val});
}
replycomment=()=>
{
console.log("sddff");  
this.setState({dynamictextbox:"1"})  

}
render()
{
   
    const mycontainerstyle={
        width:"50%",
        margin:"10px auto"

        
    } ;
    const commentsstyle={
        padding:"5px 10px",
        border:"none",
        background:"#F2F3F5",
        margin:"10px 0 0 0",
        borderRadius:"100px",
        textAlign:"left",
        fontSize:"14px",
    };
    const commentsstylenew={
        fontSize:"14px",
        textAlign:"left",
        paddingLeft:"10px",
        marginBottom:"10px"
    }
    const commentsstyleneww={
       
        paddingLeft:"10px",
        color:"blue",
        marginBottom:"10px",
        textDecoration:"none"
    }



    return(
        <div className='container ' style={mycontainerstyle}>
         <div className='commentsblock'>

            
{this.state.comments.map((res,i)=>{
    return ( 
       <div> 
        <div style={commentsstylenew}>
        <div style={commentsstyle}>
        {res.value}</div>
        <a href='#' id={i} style={commentsstyleneww} onClick={this.replycomment}>Reply</a>

        </div>
       
        
        </div>
    )
})}
     

        </div>   

        <div className='form-group'>
<textarea value={this.state.newcomments} className='form-control' rows="3" onKeyDown={(e)=>this.WriteComment(e)} 
 onChange={(e)=>this.handlechange(e.target.value)}
/>

        </div>
        </div>
    )
}

}
export default FBcomment;