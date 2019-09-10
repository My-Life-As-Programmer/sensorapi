import React, {Component} from "react"
import ReactDom from "react-dom"

import Header from "./layouts/Header"
import Sdata from "./layouts/Sdata"

class App extends Component{
  constructor(props){
    super(props)
    let data = fetch('api/data/').then(response=>response.json()).then(data => data)
    console.log(data)
    this.store=[

    ]
  }


  render(){
    return(
      <div className="container">
        <Header />
        <Sdata />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
