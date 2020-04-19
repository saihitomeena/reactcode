import React from 'react';
class ConditionalRender extends React.Component
{
constructor(props)
{
super(props);
}
render()
{
if(this.props.logged)    
return (
<div>
    Sign IN
</div>
)	
else{
    return (
        <div>
            Logout
        </div>
    )

}}
}
export default ConditionalRender;