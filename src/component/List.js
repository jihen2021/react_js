import React, { Component } from 'react'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
         Person:['Jihen','Mon image','Bio','Etudient'] ,
    }
}

   
    render() {
        return (
            <div>
          
   <ul className='Person'>
   {
     this.state.Person.map((elt) => (<li >{elt}</li> ))

    }
   </ul>

     </div>
    )
    }
}
