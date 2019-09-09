import React, {Component} from "react"
import ReactDom from "react-dom"

class App exttends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1> From APP </h1>
      <div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
