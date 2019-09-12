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
      endpoint:"api/data/"
    }
  }

  searchApi = (s,b,a) =>{
    this.baseUrl = 'api/data/'
    if(s!==""){
      this.baseUrl=this.baseUrl+'?sensor='+s
      console.log(this.baseUrl)
      if(b!==""){
          this.baseUrl=this.baseUrl+'&before='+b
          console.log(this.baseUrl)
      }
      if(a!==""){
        this.baseUrl=this.baseUrl+'&after='+a
        console.log(this.baseUrl)
      }
    }

    this.setState({
                    endpoint:this.baseUrl
                    })
  }

  render(){
    return(
      <div className="container">
        <Header />
        <Query searchapi={this.searchApi}/>
        <Chart endpoint={this.state.endpoint}/>
        <Sdata endpoint={this.state.endpoint} />

      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'))
