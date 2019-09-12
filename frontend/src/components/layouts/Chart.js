import React, {Component} from "react"
import {Line, Bar} from "react-chartjs-2"
import axios from "axios"

export default class Chart extends Component{
  constructor(props){
    super(props);
    this.state={
      labels: [],
      values: [],
      sensor: "",
      loading: 0
    }
  }

  componentDidMount(){
                      this.updateState()
                      }


    convertTime =(data)=>{
                          let dateObj = data.map(dt => new Date(dt*1000))
                          let fin = dateObj.map(dt => {
                                  return dt.getDate()+"-"+dt.getMonth()+"-"+dt.getFullYear()+" "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
                                  })
                          return fin
                          }

    updateState(){
        if(this.props.endpoint==='api/data/'&&this.state.loading===1){
              axios.get(this.props.endpoint+'?sensor=Temperature')
                    .then(res=>{
                        this.setState({
                          labels: res.data.map(dt=>dt.timestamp),
                          values: res.data.map(dt=>dt.reading),
                          sensor: res.data[0].sensorType,
                          loading: 0
                          })
                      })
        }
        else{
          axios.get(this.props.endpoint)
                .then(res=>{
                    this.setState({
                      labels: res.data.map(dt=>dt.timestamp),
                      values: res.data.map(dt=>dt.reading),
                      sensor: res.data[0].sensorType,
                      loading: 1
                      })
                  })
        }
    }


  render(){
    let timeLabel = this.convertTime(this.state.labels)
    this.updateState()
    return(
      <div style={{marginTop:"5em"}}>

          <Line
            data={{
                  labels: timeLabel,
                  datasets: [{
                    label: this.state.sensor,
                    data: this.state.values,
                    fill: false,
                    backgroundColor: "#825CFF",
                    borderColor: "#000", //this.state.values.map(dt=>dt>30? "3F00" : "#0F0" )
                    borderWidth: 2
                  }]
                }}
            options={{
                      scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                  }}}
          />

      </div>
    )
  }
}
