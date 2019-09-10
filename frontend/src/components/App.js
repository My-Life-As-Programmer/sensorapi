import React, {Component} from "react"
import ReactDom from "react-dom"
import axios from "axios"

import Header from "./layouts/Header"
import Sdata from "./layouts/Sdata"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      "data" : []
    }
    axios.get('api/data/').then(res => this.setState({ data:res.data}))

  }


  render(){
    console.log(this.state)
    return(
      <div className="container">
        <Header />
        <Sdata />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
