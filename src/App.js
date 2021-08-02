
import './App.css';
import React, { Component } from 'react'
import List from './component/List';
import Counter from './component/Counter';
export default class App extends Component {

  state={
    show:false,
    
  }
  toggle=() => {
    this.setState({show:!this.state.show})
  }
  render() {

    return (
        <div>
    
       

        <button onClick={this.toggle} className='monboutton' >{this.state.show?'Visible':'Hidden'}</button>
        {
        this.state.show ?<List/>:<h1>cliquer sur le boutton pour afficher le profil et le compteur </h1>
        }

{
        this.state.show ?<Counter/>:'' 
        }

      </div>
    )
  }
}
