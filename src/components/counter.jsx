import React, { Component } from 'react';   
class Counter extends Component {
    state ={
        count:0,
        tags: ['tag1', 'tag2', 'tag3','tag4']
       
    };
    render() { 
       // let classes = this.getBadgeClasses();

        return (
        <div>
          

       
        <ul>
        {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>

        </div>);

        
    }


}
 


export default Counter;