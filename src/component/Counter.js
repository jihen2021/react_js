
import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count:0 ,
        }
    }
   
componentDidMount(){
  setInterval(() => {
      this.setState({count: this.state.count+1 })
      
  }, 1000);
   
       }
    
    render()
     {
        return (
            <div>
    
               <p className='compteur'> {this.state.count}</p>
            </div>
        )
    }
}

export default Counter

