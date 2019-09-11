import React, {Component} from "react"
import ReactDom from "react-dom"
import axios from "axios"

import Header from "./layouts/Header"
import Chart from "./layouts/Chart"
import Sdata from "./layouts/Sdata"
import Query from "./layouts/Query"

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data : []
    }
  }



  render(){
    console.log("in app.js render")
    return(
      <div className="container">
        <Header />
        <Query />
        <Chart endpoint='api/data' />
        <Sdata endpoint='api/data' />

      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
