import React, {Component} from "react"
import ReactDom from "react-dom"
import axios from "axios"

import Header from "./layouts/Header"
import Chart from "./layouts/Chart"
import Sdata from "./layouts/Sdata"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      "data" : []
    }
  }

  render(){
    return(
      <div className="container">
        <Header />
        <Chart endpoint='api/data' />
        <Sdata endpoint='api/data' />

      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
