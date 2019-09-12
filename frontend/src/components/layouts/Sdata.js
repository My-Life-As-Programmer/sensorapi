import React, {Component} from "react"
import ReactDom from "react-dom"
import axios from "axios"


export default class Sdata extends Component{
  constructor(props){
    super(props)

    this.state ={
      data:[],
      loaded: false,
      placeholder: "Loading"
    }
  }

  componentDidMount(){
    this.updateState()
  }

  convertTime =(data)=>{
      let dateObj = new Date(data*1000)
      let fin = dateObj.getDate()+"-"+dateObj.getMonth()+"-"+dateObj.getFullYear()+" "+dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()
      return fin
    }

    updateState(){
      if(this.props.endpoint==='api/data/'&this.state.loaded===true){
        axios.get(this.props.endpoint+'?sensor=Temperature')
              .then(res=>{
                if(res.status!== 200){
                  return this.setState({placeholder: "something went wrong"})
                }
                this.setState({
                  data: res.data,
                  loaded: false
                })
              })}
            else{
              axios.get(this.props.endpoint)
                    .then(res=>{
                      if(res.status!== 200){
                        return this.setState({placeholder: "something went wrong"})
                      }
                      this.setState({
                        data: res.data,
                        loaded: true
                      })
                    })
            }

    }

  render(){
    const {data, loaded, placeholder} = this.state
    let lst = data.map(dt => <tr ><td>{this.convertTime(dt.timestamp)}</td><td>{dt.reading}</td><td>{dt.sensorType}</td></tr>)
    this.updateState()

    return(
      <div>
          <table
              className="table"
              style={{marginTop:"5em"}}
            >
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Reading</th>
                <th scope="col">Sensor</th>
              </tr>
            </thead>
            <tbody>
              {lst}
            </tbody>
          </table>
      </div>
    )
  }
}
