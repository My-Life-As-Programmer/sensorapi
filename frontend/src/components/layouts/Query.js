import React, {Component} from "react"


export default class Query extends Component{
  constructor(props){
    super(props)
    this.state={
      sensor : "",
      before : "",
      after : ""
    }
  }


  onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  onsub = (e)=>{
    e.preventDefault()
    this.props.searchapi(this.state.sensor,this.state.before,this.state.after)
    this.setState({
          sensor : "",
          before : "",
          after : ""
        })
  }

  render(){
    return(
          <form onSubmit={this.onsub}>
              <div className="input-group" style={{marginTop:"1em"}}>
                    <input type="text" aria-label="sensor" className="form-control" placeholder="sensor" onChange={this.onChange} name="sensor" value={this.state.sensor}/>
                    <input type="text" aria-label="before" className="form-control" placeholder="Before" onChange={this.onChange} name="before" value={this.state.before}/>
                    <input type="text" aria-label="after" className="form-control" placeholder="After" onChange={this.onChange} name="after" value={this.state.after}/>

                    <div className="input-group-prepend">
                        <button name="submit"
                                type="submit"
                                className="btn btn-primary"
                        >
                          Search
                        </button>
                    </div>
              </div>
          </form>
      )
  }
}
